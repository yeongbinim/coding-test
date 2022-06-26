function makeGraph(edges) {
	const graph = new Map();
	for (let edge of edges) {
		const node1 = graph.get(edge[0]) || new Array();
		const node2 = graph.get(edge[1]) || new Array();
		node1.push(edge[1]);
		node2.push(edge[0]);
		graph.set(edge[0], node1);
		graph.set(edge[1], node2);
	}
	for (let node of graph.values())
		node.sort((a, b) => a - b);
	return graph;
}

function dfs(graph, start) {
	let answer = "";
	const visit = Array(graph.size + 1).fill(false);
	
	function recur(curNode) {
		const nextNodes = graph.get(curNode) || [];
		visit[curNode] = true;
		answer += curNode + " ";
		for (let nextNode of nextNodes) {
			if (!visit[nextNode])
				recur(nextNode);
		}
	}
	recur(start);
	return answer;
}

function bfs(graph, start) {
	let answer = "";
	const visit = Array(graph.size + 1).fill(false);
	const q = new Array();
	q.push(start);
	visit[start] = true;
	answer += (start + " ");
	while (q.length > 0){
		let curNode = q.shift();
		const nextNodes = graph.get(curNode) || [];
		for (let nextNode of nextNodes) {
			if (!visit[nextNode]) {
				q.push(nextNode);
				visit[nextNode] = true;
				answer += (nextNode + " ");
			}
		}
	}
	return answer;

}


function solution(n, edges, start) {
	let answer = "";
	const graph = makeGraph(edges);

	answer += dfs(graph, start) + "\n";
	answer += bfs(graph, start);
	return answer;
}

// const lines = require("fs").readFileSync("./input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let [n, _, start] = lines.shift().split(" ").map(item => +item);
let edges = [];
for (let line of lines) edges.push(line.split(" ").map(item => +item));

console.log(solution(n, edges, start));