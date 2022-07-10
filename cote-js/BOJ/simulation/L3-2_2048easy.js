//p: 0상 1우 2하 3좌
function move(graph, p) {
	let count = 0;
	const newGraph = graph.map(line => [...line]);
	if (p === 1) {
		const newGraph = graph.map(line => {
			let end = line.length - 1;
			while (line[end] !== 0) {
				
			}//[0, 2, 2, 4, 2, 0]
		});
	}
	return count === 0 ? -1 : newGraph;
}
function recur(curGraph, p, level) {
	if (level === 0)
		return Math.max(...curGraph.map((line) => Math.max(...line)));
	const nextGraph = move(curGraph, p);
	return Math.max(...[0, 1, 2, 3].map(p => recur(nextGraph, p, level - 1)));
}

function solution(graph) {
	// graph = [Array(graph.length + 2).fill(-1), ...graph.map((line) => [-1, ...line, -1]), Array(graph.length + 2).fill(-1)];
	return Math.max(...[0, 1, 2, 3].map(p => recur(graph, p, 1)));
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const graph = lines.map((line) => line.split(" ").map((item) => parseInt(item)));
console.log(solution(graph));