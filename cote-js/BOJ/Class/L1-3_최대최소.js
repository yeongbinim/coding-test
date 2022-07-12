function solution(values) {
	return [Math.min(...values), Math.max(...values)];
}

// const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const values = lines[1].split(' ').map(item => +item);
console.log(solution(values).join(" "));