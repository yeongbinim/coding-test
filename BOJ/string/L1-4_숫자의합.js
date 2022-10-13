function solution(str) {
	let sum = 0;
	for (let i = 0; i < str.length; i++) sum += +str[i];
	return sum;
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(solution(lines[1]).toString());