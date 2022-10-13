function solution(num) {
	let answer = 0;
	let value = BigInt(1);
	for (let n = BigInt(1); n <= num; n++) value *= n;
	str = value.toString(10);

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] !== '0') break;
		answer++;
	}
	return answer;
}

const line = require("fs").readFileSync("../input.txt").toString().trim();
//const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = +line;
console.log(solution(num));