function solution(num1, num2) {
	num1 = parseInt(num1.split('').reverse().join(''));
	num2 = parseInt(num2.split('').reverse().join(''));
	return num1 > num2 ? num1 : num2;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const [num1, num2] = line.split(" ");
console.log(solution(num1, num2));
