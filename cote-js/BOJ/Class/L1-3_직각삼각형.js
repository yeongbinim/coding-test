function solution(numsList) {
	const answer =[];
	for (let nums of numsList) {
		nums.sort((a, b) => a - b);
		if (Math.pow(nums[0], 2) + Math.pow(nums[1], 2) === Math.pow(nums[2], 2))
			answer.push("right");
		else
			answer.push("wrong");
	}
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.pop();
const numsList = lines.map(line => line.split(' ').map(item => +item))
console.log(solution(numsList).join("\n"));