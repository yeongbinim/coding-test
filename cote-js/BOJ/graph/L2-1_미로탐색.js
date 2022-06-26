function bfs(graph, start, end) {
	const q = new Array;
	const regular = [[1, 0], [0, 1], [-1, 0], [0, -1]];

	graph[start[0]][start[1]] = 0;
	q.push([start[0], start[1], 1]);
	while (q.length > 0) {
		let [curX, curY, curLevel] = q.shift();
		for (let i = 0; i < 4; i++) {
			const next = [curX + regular[i][0], curY + regular[i][1]];
			if (0 <= next[0] && next[0] < graph.length && 0 <= next[1] && next[1] < graph[0].length) {
				if (graph[next[0]][next[1]] == 1) {
					graph[next[0]][next[1]] = 0;
					q.push([next[0], next[1], curLevel + 1]);
					if (next[0] == end[0] && next[1] == end[1])
						return curLevel + 1;
				}
			}
		}
	}
	return "";
}

function solution(graph, endX, endY) {
	let answer = "";
	answer += bfs(graph, [0, 0], [endX - 1, endY - 1]);
	return answer;
}

// const inputLines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const inputLines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let [targetX, targetY] = inputLines.shift().split(" ").map(item => parseInt(item));
let graph = [];
for (let inputLine of inputLines)
	graph.push(inputLine.split("").map(item => parseInt(item)));

console.log(solution(graph, targetX, targetY));