function solution(str) {
	const answer = [];
	for (let i = 97; i <= 122; i++) {
		answer.push(str.indexOf(String.fromCharCode(i)));
	}
	return answer;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(solution(line).join(" "));
