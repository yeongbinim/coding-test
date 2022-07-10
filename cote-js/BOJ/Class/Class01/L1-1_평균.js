function solution(N, values) {
	let sum = 0;
	const max = Math.max(...values);
	for (let value of values) sum += value / max * 100;
	return sum / N;
}

const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = +lines.shift();
const values = lines[0].split(" ").map(item => +item);
console.log(solution(N, values).toString(10));