function solution(clothes) {
	const dict = new Map();
	for (let [_, type] of clothes)
		dict.set(type, (dict.get(type) || 1) + 1);
	let total = 1;
	for (let v of dict.values())
		total *= v;
	return total - 1;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testcase = +lines.shift();
let count = 0;
for (let t = 0; t < testcase; t++) {
	const clothNum = +lines[count];
	const clothes = lines.slice(count + 1, count + 1 + clothNum).map(cloth => cloth.split(" "));
	count += clothNum + 1;
	console.log(solution(clothes).toString());
}