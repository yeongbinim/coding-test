export default function Nodes({$app, initialState, onClick, onBackClick}){
	this.state = initialState;
	this.$target = document.createElement("div");
	this.$target.className = "Nodes";
	$app.appendChild(this.$target);

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	}
	
	this.render = () => {
		const nodesTemplate = this.state.nodes.map((node) => `<div class="Node" data-node-id="${node.id}"><img src="./assets/${node.type === "FILE" ? "file" : "directory"}.png"/><div>${node.name}</div></div>`).join("");
		this.$target.innerHTML = this.state.isRoot ? nodesTemplate : `<div class="Node"><img src="./assets/prev.png"/></div> ${nodesTemplate}`
	}

	this.$target.addEventListener("click", (e) => {
		const {nodeId} = e.target.closest(".Node").dataset;
		if (!nodeId){
			onBackClick();
			return;
		};

		const selectedNode = this.state.nodes.find((node) => node.id === nodeId);
		if (selectedNode) onClick(selectedNode);
	});

	this.render();
}

