import Grid from "./components/Grid.js";
import request from "./api/api.js";
export default function App($app){
    const cache = {};
    const cacheSort = {};
    this.state = {
        grid1:{
            column:[],
            row:[],
            searchData:""
        },
        grid2:{
            column:[],
            row:[],
            searchData:""
        },
        grid3:{
            column:[],
            row:[],
            searchData:""
        },
    }
    const grid1 = new Grid({
        $app,
        initialState: this.state.grid1,
        onClick: (idx, sortOrder) => {
            const nextState = {...this.state};
			if (sortOrder !== "default"){
				nextState.grid1["row"].sort((a, b)=>{
					if (a[idx] < b[idx]) {
						return sortOrder === 'ASC' ? -1 : 1
					} else if (a[idx] > b[idx]) {
						return sortOrder === 'ASC' ? 1 : -1
					} else {
						return 0
					}
				});
			} else{
				nextState.grid1["row"] = [...cache[1]];
			}
            this.setState(nextState);
        },
        onSearch: keyword => {
            const nextState = {...this.state};
            nextState.grid1["searchData"] = keyword;
            nextState.grid1["row"] = cache[1].filter((r) => {
                for (let i of r){
                    if (`${i}`.includes(keyword)){
                        return true;
                    }
                }
                return false;
            })
            this.setState(nextState);
        }
    });
    const grid2 = new Grid({
        $app,
        initialState: this.state.grid2,
        onClick: (idx, sortOrder) => {
            const nextState = {...this.state};
			if (sortOrder !== "default"){
				nextState.grid2["row"].sort((a, b)=>{
					if (a[idx] < b[idx]) {
						return sortOrder === 'ASC' ? -1 : 1
					} else if (a[idx] > b[idx]) {
						return sortOrder === 'ASC' ? 1 : -1
					} else {
						return 0
					}
				});
			} else{
				nextState.grid2["row"] = [...cache[2]];
			}
            this.setState(nextState);
        },
        onSearch: keyword => {
            const nextState = {...this.state};
            nextState.grid2["searchData"] = keyword;
            nextState.grid2["row"] = cache[2].filter((r) => {
                for (let i of r){
                    if (`${i}`.includes(keyword)){
                        return true;
                    }
                }
                return false;
            })
            this.setState(nextState);
        }
    });
    const grid3 = new Grid({
        $app,
        initialState: this.state.grid3,
        onClick: (idx, sortOrder) => {
            const nextState = {...this.state};
			if (sortOrder !== "default"){
				nextState.grid3["row"].sort((a, b)=>{
					if (a[idx] < b[idx]) {
						return sortOrder === 'ASC' ? -1 : 1
					} else if (a[idx] > b[idx]) {
						return sortOrder === 'ASC' ? 1 : -1
					} else {
						return 0
					}
				});
			} else{
				nextState.grid3["row"] = [...cache[3]];
			}
            this.setState(nextState);
        },
        onSearch: keyword => {
            const nextState = {...this.state};
            nextState.grid3["searchData"] = keyword;
            nextState.grid3["row"] = cache[3].filter((r) => {
                for (let i of r){
                    if (`${i}`.includes(keyword)){
                        return true;
                    }
                }
                return false;
            })
            this.setState(nextState);
        }
    });

	this.setState = (nextState) => {
		this.state = nextState;
        grid1.setState(nextState.grid1);
        grid2.setState(nextState.grid2);
        grid3.setState(nextState.grid3);
	}

    const init = async() => {
        let data1, data2, data3;
        try {
            data1 = await request("data1");
            data2 = await request("data2");
            data3 = await request("data3");
        }
        catch (e) {
            throw new Error(e);
        }
        const nextState = {...this.state};

        nextState.grid1["column"] = ["이메일", "이름", "생년월일", "주소", "점수", "생성일", "수정일"];
        nextState.grid1["row"] = data1.map((r) => [r.email, r.profile.name, r.profile.birthday, r.profile.address, r.score, r.createdAt, r.updatedAt]);
        cache[1] = [...nextState.grid1["row"]];
        nextState.grid2["column"] = ["이름", "총점", "평균", "HTML", "CSS", "JavaScript", "국어", "영어", "수학"];
        nextState.grid2["row"] = data2.map((r) => {
            const sum = r.scores.html+ r.scores.css+ r.scores.javascript + r.scores.korean + r.scores.english + r.scores.math;
            const avg = (sum / 6).toFixed(2);
            return[r.username, sum, avg, r.scores.html, r.scores.css, r.scores.javascript, r.scores.korean, r.scores.english, r.scores.math]
        });
        cache[2] = [...nextState.grid2["row"]];
        nextState.grid3["column"] = ["번호", "닉네임", "나이", "원격근무지", "포지션", "검증여부"];
        nextState.grid3["row"] = data3.map((r) => [r.index, r.nickname, r.profile.age, r.profile.remoteWorkLocation, r.profile.position, r.verified ? "검증" : "미검증"]);
        cache[3] = [...nextState.grid3["row"]];
        this.setState(nextState);
    }
    init();
}