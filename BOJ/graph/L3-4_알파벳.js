// 비트 연산을 통해 visit 체크
function dfs(visit, start) {
	let count = 0;
	const regular = [[-1, 0], [0, -1], [1, 0], [0, 1]];

	function recur([curX, curY], nowVisit, level) {
		nowVisit |= visit[curX][curY];
		count = count < level ? level : count;
		for (let r of regular) {
			const nextX = curX + r[0];
			const nextY = curY + r[1];
			if ((nowVisit & visit[nextX][nextY]) === 0)
				recur([nextX, nextY], nowVisit, level + 1);
		}
	}
	recur(start, 0, 1);
	return count;
}

function solution (graph) {
	const visit = [Array(graph[0].length + 2).fill(-1), 
					...graph.map(line => [-1, ...line.map(item => Math.pow(2, item.charCodeAt(0) - 65)), -1]),
					Array(graph[0].length + 2).fill(-1)];
	return dfs(visit, [1, 1]);
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const graph = lines.map(line => line.split(""));
console.log(solution(graph).toString());