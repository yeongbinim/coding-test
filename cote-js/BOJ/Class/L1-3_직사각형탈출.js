function solution([curX, curY], [bX, bY]) {
	return Math.min(curX, curY, bX - curX, bY - curY);
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const [curX, curY, bX, bY] = line.split(" ").map(item => +item);
console.log(solution([curX, curY], [bX, bY]));
