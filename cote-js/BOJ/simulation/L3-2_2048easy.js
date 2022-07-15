//p: 0상 1우 2하 3좌
function move(graph, nextGraph, p) {
	let totalCount = 0;
	const len = graph.length;
	const [dx, dy] = [[1, 0], [0, -1], [-1, 0], [0, 1]][p];
	const [startX, startY] = [[0, 0], [len - 1, len - 1], [len - 1, len - 1], [0, 0]][p];
	let curX = startX, curY = startY;
	for (let i = 0; i < len; i++) {
		let cur = graph[curX][curY];
		let count = [0, 0];
		curX += dx; curY += dy;
		for (let j = 1; j < len; j++) {
			const now = graph[curX][curY];
			if (cur !== 0) {
				if (now === cur) {
					nextGraph[startX + count[0]][startY + count[1]] = now * 2;
					cur = 0;
				}
				else {
					nextGraph[startX + count[0]][startY + count[1]] = now;
					cur = now;
				}
				count[0] += dx; count[1] += dy;
			}
			curX += dx; curY += dy;
		}
		totalCount += count[0] + count[1];
		count[0] -= dx * count[0], count[1] -= dy * count[1];
		count[0] += dy, count[1] += dx;
		curX -= dx * curX, curY -= dy * curY;
		curX += dy, curY += dx;
	}
	return totalCount === 0 ? false : true;
}

function arrMax(arr) { //2차원 배열에서 최댓값 반환
	let max = -1;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++)
			if (max < arr[i][j]) max = arr[i][j];
	}
	return max;
}

function recur(curGraph, p, level) {
	console.log("curLevel: " + level);
	console.log(curGraph.map((line) => line.join("")).join("\n"));
	const nextGraph = Array.from(Array(curGraph.length), () => Array(curGraph.length).fill(0));
	if (level === 0 || !move(curGraph, nextGraph, p))
		return arrMax(curGraph);
	return Math.max(...[0, 1, 2, 3].map(p => recur(nextGraph, p, level - 1))); //상우하좌 한 것들 중 최댓값
}

function solution(graph) {
	// graph = [Array(graph.length + 2).fill(-1), ...graph.map((line) => [-1, ...line, -1]), Array(graph.length + 2).fill(-1)];
	return Math.max(...[0, 1, 2, 3].map(p => recur(graph, p, 5)));
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const graph = lines.map((line) => line.split(" ").map((item) => parseInt(item)));
console.log(solution(graph));