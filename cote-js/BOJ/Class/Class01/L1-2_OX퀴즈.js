function solution(resList) {
	const answer = [];
	for (let res of resList) {
		let score = 0;
		let count = 1;
		for (let r of res) {
			if (r) score += count++;
			else count = 1;
		}
		answer.push(score);
	}
	return answer;
}

const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const resList = lines.map((line) => line.split("").map(item => item === 'O'));
console.log(solution(resList).join("\n"));