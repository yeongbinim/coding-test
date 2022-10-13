function dfs(visit, startX, startY) {
	let count = 0;
	const regular = [[-1, 0], [0, -1], [1, 0], [0, 1]];

	function recur(curX, curY) {
		visit[curX][curY] = 0;
		count++;
		for (let r of regular) {
			const nextX = curX + r[0];
			const nextY = curY + r[1];
			if (visit[nextX][nextY] === 1)
				recur(nextX, nextY);
		}
	}
	recur(startX, startY);
	return count;
}

function solution(n, graph) {
	const answer = [];
	const visit = [Array(n + 2).fill(-1), 
					...graph.map((line) => [-1, ...line, -1]),
					Array(n + 2).fill(-1)];
	for (let [x, line] of visit.entries()) {
		for (let [y, node] of line.entries()) {
			if (node === 1)
				answer.push(dfs(visit, x, y));
		}
	}
	answer.sort((a, b) => a - b);
	return `${answer.length}\n${answer.join("\n")}`;
}


// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let n = +lines.shift();
let graph = [];
for (let line of lines) graph.push(line.split("").map(item => +item));

console.log(solution(n, graph));

