const house = Array.from(Array(15), () => Array(15).fill(1));
for (let i = 1; i < 15; i++) house[0][i] += house[0][i - 1];
for (let i = 1; i < 15; i++) {
	for (let j = 1; j < 15; j++)
		house[i][j] = house[i - 1][j] + house[i][j - 1];
}

function solution(k, n) {
	return house[k][n - 1];
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
lines.shift();
for (let i = 0; i < lines.length; i += 2) {
	console.log(solution(+lines[i], +lines[i + 1]));
}