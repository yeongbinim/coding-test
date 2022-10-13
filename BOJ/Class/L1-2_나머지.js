function solution(values) {
	const set = new Set();
	for (let value of values) set.add(value % 42);
	return set.size;
}

const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const values = lines.map(item => +item);
console.log(solution(values).toString());