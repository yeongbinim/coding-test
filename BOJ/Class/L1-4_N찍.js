function solution(num) {
	const answer = [];
	for (let i = num; i >= 1; i--) answer.push(i);
	return answer;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(solution(+line).join("\n"));
