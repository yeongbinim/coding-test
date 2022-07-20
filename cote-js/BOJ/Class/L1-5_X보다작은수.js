function solution(numList, target) {
	const answer = [];
	for (let num of numList) {
		if (num < target) answer.push(num);
	}
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [, target] = lines[0].split(" ").map(num => +num);
const numList = lines[1].split(" ").map(num => +num);
console.log(solution(numList, target).join(" "));