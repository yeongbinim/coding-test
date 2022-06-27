function bfs(visit, start, end) {
	let idx = 0;
	const q = new Array();
	const regular = [[1, 0], [0, 1], [-1, 0], [0, -1]];

	q.push([start[0], start[1]]);
	while (q.length > idx) {
		let cur = q[idx++];
		for (let i = 0; i < 4; i++) {
			const next = [cur[0] + regular[i][0], cur[1] + regular[i][1]];
			if (visit[next[0]][next[1]] == 1) {
				visit[next[0]][next[1]] = visit[cur[0]][cur[1]] + 1;
				q.push([next[0], next[1]]);
				if (next[0] == end[0] && next[1] == end[1])
					return visit[next[0]][next[1]];
			}
		}
	}
	return "";
}

function solution(graph, endX, endY) {
	let answer = "";
	//graph복사, 위, 아래, 왼쪽, 오른쪽 모두 -1로 경계표시
	const visit = [Array(graph[0].length).fill(-1), ...graph.map((line) => [-1, ...line, -1]), Array(graph[0].length).fill(-1)];
	
	answer += bfs(visit, [1, 1], [endX, endY]);
	return answer;
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let [targetX, targetY] = lines.shift().split(" ").map(item => parseInt(item));
let graph = [];
for (let line of lines) graph.push(line.split("").map(item => parseInt(item)));

console.log(solution(graph, targetX, targetY));