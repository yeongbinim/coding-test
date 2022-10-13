function solution(A, B) {
	return [A + B, A - B, A * B, Math.floor(A / B), A % B];
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const [A, B] = line.split(" ").map(item => +item);
console.log(solution(A, B).join("\n"));