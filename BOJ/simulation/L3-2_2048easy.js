//p: 0상 1우 2하 3좌
function move(graph, nextGraph, p) {
	const len = graph.length;
	const [dx, dy] = [[1, 0], [0, -1], [-1, 0], [0, 1]][p];
	const [startX, startY] = [[0, 0], [len - 1, len - 1], [len - 1, len - 1], [0, 0]][p];
	
	let totalCount = 0;
	let curX = startX, curY = startY;
	let offsetX = startX, offsetY = startY;
	
	for (let i = 0; i < len; i++) {
		let cur = graph[curX][curY];
		curX += dx; curY += dy;
		for (let j = 1; j < len; j++) {
			const next = graph[curX][curY];
			if (cur !== 0 && next === cur) {
				nextGraph[offsetX][offsetY] = cur * 2;
				cur = 0;
				offsetX += dx, offsetY += dy;
			} else if (cur === 0) {
				cur = next;
			} else {
				nextGraph[offsetX][offsetY] = cur;
				if (next !== 0) {
					cur = next;
					offsetX += dx, offsetY += dy;
				}
			}
			curX += dx; curY += dy;
		}
		nextGraph[offsetX][offsetY] = cur;

		totalCount += offsetX + offsetY;
		offsetX = startX + dy * (i+ 1), offsetY = startY + dx * (i+ 1);
		curX = startX + dy * (i+ 1), curY = startY + dx * (i+ 1);
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
	const nextGraph = Array.from(Array(curGraph.length), () => Array(curGraph.length).fill(0));
	if (level === 0 || !move(curGraph, nextGraph, p))
		return arrMax(curGraph);
	return Math.max(...[0, 1, 2, 3].map(p => recur(nextGraph, p, level - 1))); //상우하좌 한 것들 중 최댓값
}

function solution(graph) {
	return Math.max(...[0, 1, 2, 3].map(p => recur(graph, p, 5)));
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const graph = lines.map((line) => line.split(" ").map((item) => parseInt(item)));
console.log(solution(graph));