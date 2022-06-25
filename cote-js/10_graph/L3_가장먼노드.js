//[입력] n: 노드개수, edges: 간선들
//[처리] bfs를 통해 각 레벨에서의 노드 개수를 센다.
//[출력] 1번에서 가장 멀리 떨어진 노드의 개수

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
	return graph;
}

function bfs(graph, visit, start) {
	const q = new Array();
	let count = 0, layer = 0;
	visit[start] = true;
	q.push([start, layer]);
	while (q.length > 0){
		let cur = q.shift();
		for (let nextNode of graph.get(cur[0])) {
			if (!visit[nextNode]) {
				q.push([nextNode, cur[1] + 1]);
				visit[nextNode] = true;
			}
		}
		if (layer < cur[1]) {
			layer = cur[1];
			count = 0;
		}
		count++;
	}
	return count;
}

function solution(n, edges) {
	const graph = makeGraph(edges);
	const visit = Array(n + 1).fill(false);
	return bfs(graph, visit, 1);
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));