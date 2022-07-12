function solution(value) {
	const answer = [];
	for (let v = 1; v <= value; v++) answer.push('*'.repeat(v));
	return answer;
}

// const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const value = +lines[0];
console.log(solution(value).join("\n"));