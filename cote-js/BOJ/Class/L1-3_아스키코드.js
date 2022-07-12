function solution(c) {
	return c.charCodeAt(0);
}

const line = require("fs").readFileSync("../../input.txt").toString().trim();
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(solution(line).toString());