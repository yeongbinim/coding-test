function solution(X) {
	const d = Array(X + 1).fill(0);
	d[1] = 0;
	for (let i = 2; i <= X; i++) {
		let min = d[i - 1];
		if (i % 3 === 0 && d[i / 3] < min) min = d[i / 3];
		if (i % 2 === 0 && d[i / 2] < min) min = d[i / 2];
		d[i] = min + 1;
	}
	return d[X].toString();
}
// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const X = parseInt(lines[0]);

console.log(solution(X));