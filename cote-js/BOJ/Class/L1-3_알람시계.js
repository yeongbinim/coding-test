function solution(hour, minute) {
	let temp = parseInt((minute + 60 - 45) / 60) ? 0 : 1;
	return [(hour - temp + 24) % 24, (minute + 60 - 45) % 60];
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const [hour, minute] = line.split(" ").map(item => +item);
console.log(solution(hour, minute).join(" "));
