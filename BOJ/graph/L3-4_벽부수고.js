function bfs(visit, [endX, endY]) {
	let idx = 0;
	let curX = 1, curY = 1, curZ = 0;
	const regularXY = [[1, 0], [0, 1], [-1, 0], [0, -1]];
	const q = new Array();

	q.push([curX, curY, visit[curZ][curX][curY]]);
	visit[visit[0][1][1]][1][1] = 1;
	while(q.length > idx) {
		[curX, curY, curZ] = q[idx++];
		for (let [dx, dy] of regularXY) {
			let nextX = curX + dx;
			let nextY = curY + dy;
			if (visit[curZ][nextX][nextY] === 0) {
				q.push([nextX, nextY, curZ]);
				visit[curZ][nextX][nextY] = visit[curZ][curX][curY] + 1;
				if (nextX === endX && nextY === endY) return visit[curZ][nextX][nextY];
			} else if (visit[curZ][nextX][nextY] === 1 && curZ === 0) {
				q.push([nextX, nextY, 1]);
				visit[1][nextX][nextY] = visit[0][curX][curY] + 1;
				if (nextX === endX && nextY === endY) return visit[1][nextX][nextY];
			}
		}
	}
	return endX === curX && endY === curY ? visit[curZ][curX][curY]: -1;
}

function solution(graph) {
	let answer = "";
	//graph복사, 위, 아래, 왼쪽, 오른쪽 모두 -1로 경계표시
	const visit = [
		[Array(graph[0].length + 2).fill(-1), ...graph.map((line) => [-1, ...line, -1]), Array(graph[0].length + 2).fill(-1)],
		[Array(graph[0].length + 2).fill(-1), ...graph.map((line) => [-1, ...line, -1]), Array(graph[0].length + 2).fill(-1)]
	];
	answer += bfs(visit, [graph.length, graph[0].length]);
	return answer;
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
let graph = [];
for (let line of lines) graph.push(line.split("").map(item => +item));
console.log(solution(graph));