import Breadcrumb from "./components/Breadcrumb.js";
import Nodes from "./components/Nodes.js";
import Loading from "./components/Loading.js";
import ImageView from "./components/ImageView.js";
import request from "./api/api.js";

const cache = {}; //{0: nodes, 1: nodes, ...}

export default function App($app){
	this.state = {
		isRoot: true, //Root면 뒤로가기 없어야 함
		isLoading: false, //Loading바를 위함
		selectedFilePath: null, //ImageView의 경로
		depth: [], //Breadcrumb에 경로 [하나의 노드, ...]
		nodes: [], //현재 경로의 Node들 [{}, {}, ...]
	}
	this.setState = (nextState) => {
		this.state = nextState;
		breadcrumb.setState(this.state.depth);
		loading.setState(this.state.isLoading);
		imageview.setState(this.state.selectedFilePath);
		nodes.setState({isRoot: this.state.isRoot, nodes: this.state.nodes});
	}
	const breadcrumb = new Breadcrumb({
		$app,
		initialState: this.state.depth,
		onClick: (index) => {
			// breadcrumb에서 현재 위치를 누른 경우는 무시함
			if (index === this.state.depth.length) return;

			const nextDepth = this.state.depth.slice(0, index + 1);
			const nextNodes = cache[nextDepth[index].id];
			this.setState({
				...this.state,
				depth: nextDepth,
				nodes: nextNodes,
				isRoot: nextDepth.length === 1
			});
		}
	});
	const nodes = new Nodes({
		$app,
		initialState: {isRoot: this.state.isRoot, nodes: this.state.nodes},
		onClick: async (node) => {
			try {
				if (node.type === "DIRECTORY") {
					this.setState({...this.state, isLoading: true}); //로딩처리
					const nextNodes = cache[node.id] ? cache[node.id] : await request(node.id);
					this.setState({
						...this.state,
						nodes: nextNodes,
						isLoading: false,
						depth: [...this.state.depth, node],
						isRoot: false,
					});
					cache[node.id] = nextNodes;
				} else if (node.type === "FILE") {
					this.setState({
						...this.state,
						selectedFilePath: node.filePath
					});
				}
			}
			catch(e) {
				throw new Error(e.message);
			}
		},
		onBackClick: () => {
			const nextState = {...this.state};
			nextState.depth.pop();
			nextState.isRoot = nextState.depth.length === 1;
			const prevNodeId = nextState.depth[nextState.depth.length - 1].id;
			this.setState({
				...nextState,
				nodes: cache[prevNodeId]
			});
		}
	});
	const loading = new Loading({
		$app,
		initialState: this.state.isLoading
	});
	const imageview = new ImageView({
		$app,
		initialState: this.state.selectedFilePath,
		onClick: () => { //닫아주기 위해서 들어가는 onClick
			this.setState({
				...this.state,
				selectedFilePath: null //닫아주기
			});
		},
	});
	const init = async() => {
		try {
			this.setState({...this.state, isLoading: true}); //로딩처리
			const rootNodes = await request(null);
			console.log("rootNodes: ", rootNodes);
			this.setState({
				...this.state,
				nodes: rootNodes,
				isLoading: false,
				depth: [{name:"root", id: "0", type:"DIRECTORY", parent:null, filePath: null}]
			});
			cache[0] = rootNodes;
		}
		catch(e) {
			throw new Error(e);
		}
	}
	init();
}