function solution(values) {
	return values[0] * values[1];
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const values = line.split(" ").map(item => +item);
console.log(solution(values).toString());