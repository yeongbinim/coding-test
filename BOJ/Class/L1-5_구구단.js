function solution(value) {
	let answer = [];
	for (let i = 1; i <= 9; i++) answer.push(`${value} * ${i} = ${value * i}`);
	return answer;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const value = +line;
console.log(solution(value).join("\n"));