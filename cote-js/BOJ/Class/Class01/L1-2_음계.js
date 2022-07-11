function solution(values) {
	let flag = values[0] === 8 ? -1 : 1;
	for (let i = 1; i < values.length; i++) {
		if ((values[i] - values[i - 1]) * flag !== 1)
			return "mixed";
	}
	return flag === 1 ? "ascending" : "descending";
}

const line = require("fs").readFileSync("../../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const values = line.split(" ").map(item => +item);
console.log(solution(values));