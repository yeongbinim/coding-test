function solution(num) {
	if (num >= 90) return "A";
	else if (num >= 80) return "B";
	else if (num >= 70) return "C";
	else if (num >= 60) return "D";
	else return "F";
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = +line;
console.log(solution(num));