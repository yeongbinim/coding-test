function solution(value) {
	return value % 4 === 0 ? (value % 100 !== 0 ? 1 : (value % 400 === 0 ? 1 : 0)) : 0;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const value = +line;
console.log(solution(value));