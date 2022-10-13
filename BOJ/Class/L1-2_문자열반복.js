function solution(items) {
	const answer = [];
	for (let [num, str] of items) {
		let ret = "";
		for (let i = 0; i < str.length; i++) ret += str[i].repeat(num);
		answer.push(ret);
	}
	return answer;
}

const lines = require("fs").readFileSync("../../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const items = lines.map(line => line.split(" ").map((item) => +item ? +item : item));
console.log(solution(items).join("\n"));