function dfs(graph, start) {
	const visit = new Array(graph.length).fill(false);
	let count = 0;
	function recur(cur) {
		visit[cur] = true;
		count++;
		const curNode = graph[cur];
		for (let next of curNode) {
			if (!visit[next])
				recur(next);
		}
	}
	recur(start);
	return count;
}

function solution(n, edges) {
	const graph = Array.from(Array(n + 1), () => []);
	for (let edge of edges) {
		graph[edge[0]].push(edge[1]);
		graph[edge[1]].push(edge[0]);
	}
	return dfs(graph, 1) - 1;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let n = +lines.shift();
let e = lines.shift();
let edges = lines.map(line => line.split(" ").map(item => +item));

console.log(solution(n, edges));