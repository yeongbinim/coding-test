function findMin(board) {
	const count = [0, 0];
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if ((i + j) % 2 !== board[i][j]) count[0]++;
			else count[1]++;
		}
	}
	return Math.min(...count);
}

function solution(board, n, m) {
	let min = 999999999;
	for (let r = 0; r <= n - 8; r++) {
		for (let c = 0; c <= m - 8; c++) {
			const subBoard = board.map((line) => line.slice(c, c + 8)).slice(r, r + 8);
			const num = findMin(subBoard);
			min = num < min ? num : min;
		}
	}
	return min;
}

const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [n, m] = lines.shift().split(" ").map(num => +num);
const board = lines.map(line => line.split("").map(b => b === 'B' ? 1 : 0));
console.log(solution(board, n, m).toString());