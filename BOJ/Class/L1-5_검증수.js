function solution(values) {
	let sum = 0;
	for (let value of values) sum += Math.pow(value, 2);
	return sum % 10;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const values = line.split(" ").map(value => +value);
console.log(solution(values));