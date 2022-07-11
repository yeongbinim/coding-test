function solution(values) {
	let max = Math.max(...values);
	return [max, values.indexOf(max) + 1];
}

// const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const values = lines.map(item => +item);
console.log(solution(values).join("\n"));