function solution(n, sols) {
	let min = 99999999999;
	let minI, minJ;
	
	for (let i = 0; i < n - 1; i++) {
		for (let j = 1; j < n; j++) {
			const temp = Math.abs(sols[i] + sols[j]);
			if (min > temp) {
				min = temp;
				minI = i;
				minJ = j;
			}
		}
	}
	return [sols[minI], sols[minJ]];
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let n = +lines.shift();
const sols = lines[0].split(" ").map(item => +item);

console.log(solution(n, sols).join(" "));