//시간초과 : shift()연산은 O(n)시간... 큐(O(1))처럼 사용하면 안댐

function bfs(visit) {
	let idx = 0;
	let cur;
	let count = 0;
	const regularXY = [[1, 0], [0, 1], [-1, 0], [0, -1]];
	const q = new Array();

	for (let [i, row] of visit.entries()) {
		for (let [j, node] of row.entries()) {
			if (node === 1)
				q.push([i, j]);
			else if(node === 0)
				count++;
		}
	}
	while (q.length > idx) {
		cur = q[idx++];
		for (let i = 0; i < 4; i++) {
			const next = [cur[0] + regularXY[i][0], cur[1] + regularXY[i][1]];
			if (visit[next[0]][next[1]] == 0) {
				visit[next[0]][next[1]] = visit[cur[0]][cur[1]] + 1;
				q.push([next[0], next[1]]);
				count--;
			}
		}
	}
	return count === 0 ? visit[cur[0]][cur[1]] - 1 : -1;
}

function solution(graph) {
	let answer = "";
	//graph복사, 위, 아래, 왼쪽, 오른쪽 모두 -1로 경계표시
	const visit = [Array(graph[0].length).fill(-1), ...graph.map((line) => [-1, ...line, -1]), Array(graph[0].length).fill(-1)];
	answer += bfs(visit);
	return answer;
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
let graph = [];
for (let line of lines) graph.push(line.split(" ").map(item => +item));
console.log(solution(graph));