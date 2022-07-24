function solution(num) {
	for (let n = 0; n <= num; n++) {
		let sum = 0;
		n.toString().split('').forEach(value => sum += +value);
		if (sum + n === num)
			return n;
	}
	return 0;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const num = +line;
console.log(solution(num));