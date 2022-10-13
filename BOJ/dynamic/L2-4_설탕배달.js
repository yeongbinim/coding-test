function solution(kg) {
	let d = kg > 5 ? Array(kg + 1).fill(5001) : Array(6).fill(5001);
	d[3] = 1;
	d[5] = 1;
	for (let k = 6; k <= kg; k++)
		d[k] = Math.min(d[k - 3], d[k - 5]) + 1;
	return d[kg] < 5001 ? d[kg] : -1;
}

//야매
function solution2(kg) {
	let answer = 0;
	let count = 0;
	while (true) {
		if (0 > kg) {
			answer = -1;
			break;
		}
		if (kg % 5 === 0) {
			answer = kg / 5 + count;
			break;
		}
		count++;
		kg -= 3;
	}
	return answer;
}

// const line = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const kg = parseInt(lines[0]);

console.log(solution(kg).toString());