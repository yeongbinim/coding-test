function solution(value) {
	const answer = [];
	for (let i = 1; i <= value; i++) answer.push(i);
	return answer;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const value = +line;
console.log(solution(value).join("\n"));