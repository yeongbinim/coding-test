//시간초과 : shift()연산은 O(n)시간... 큐(O(1))처럼 사용하면 안댐

function bfs(graph, startList, emptyNum) {
	let idx = 0;
	let curX, curY, curLevel, count = 0;
	const q = new Array;
	const regular = [[1, 0], [0, 1], [-1, 0], [0, -1]];
	for (let start of startList) {
		graph[start[0]][start[1]] = 1;
		q.push([start[0], start[1], 0]);
	}
	while (q.length > idx) {
		[curX, curY, curLevel] = q[idx++];
		for (let i = 0; i < 4; i++) {
			const next = [curX + regular[i][0], curY + regular[i][1]];
			if (0 <= next[0] && next[0] < graph.length && 0 <= next[1] && next[1] < graph[0].length) {
				if (graph[next[0]][next[1]] == 0) {
					graph[next[0]][next[1]] = 1;
					q.push([next[0], next[1], curLevel + 1]);
					count++;
				}
			}
		}
	}
	return emptyNum == count ? curLevel : -1;
}

function solution(graph) {
	let answer = "";
	let count = 0;
	const startList = new Array();
	for (let [i, row] of graph.entries()) {
		for (let [j, node] of row.entries()) {
			if (node != 0) {
				count++;
				if (node == 1)
					startList.push([i, j]);
			}
		}
	}
	answer += bfs(graph, startList, graph.length * graph[0].length - count);
	return answer;
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
let graph = [];
for (let line of lines) graph.push(line.split(" ").map(item => +item));
console.log(solution(graph));