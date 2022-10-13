function solution(num) {
	let range = 1, block = 1;

	while (block < num)  
		block += 6 * range++;
	return range;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = +line;
console.log(solution(num));
