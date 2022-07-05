function solution(graph) {
	let rBallIdx, bBallIdx, hollIdx;
	const visit = graph.map((line, i) => line.split("").map((l, j) => {
		if (l === '#') return -1;
		else if (l === "0") {
			hollIdx = [i, j];
			return 1;
		}
		else if (l === 'R') {
			rBallIdx = [i, j];
			return 2;
		} else if (l === 'B') {
			bBallIdx = [i, j];
			return 3;
		} else return 0;
	}));
	
	console.log(visit);
}
const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
let graph = [];
for (let line of lines) graph.push(line);
console.log(solution(graph));