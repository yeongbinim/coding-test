function solution(values) {
	return values[0] - values[1];
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const values = lines[0].split(" ").map(item => +item);
console.log(solution(values).toString());