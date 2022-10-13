function solution(str) {
	const splitStr = str.split(" ");
	return splitStr[0] === "" ? 0 : splitStr.length;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(solution(line).toString());