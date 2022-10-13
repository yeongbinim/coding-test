function sumTime (grounds, targetHeight, num) {
	let sum = 0;
	for (let curHeight of grounds) {
		const temp = curHeight - targetHeight;
		num += temp;
		if (temp > 0)
			sum += temp * 2;
		else if (temp < 0)
			sum += temp * -1;
	}
	if (num < 0)
		return 999999999;
	return sum;
}

function solution(grounds, num) {
	let top = Math.max(...grounds);
	let bottom = Math.min(...grounds);
	let min = 999999999;
	let idx = -1;

	for (let i = bottom; i <= top; i++) {
		const sum = sumTime(grounds, i, num);
		if (sum <= min) {
			min = sum;
			idx = i;
		}
	}
	return [min, idx];
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [,, num] = lines.shift().split(" ").map(line => +line);
const grounds = lines.map(line => line.trim()).join(" ").split(" ").map(ground => +ground);
console.log(solution(grounds, num).join(" "));