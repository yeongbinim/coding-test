function solution(values) {
	const answer = [];
	for (let [A, B] of values) {
		answer.push(A + B);
	}
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const values = lines.map(line => line.split(" ").map(item => +item));
console.log(solution(values).join("\n"));