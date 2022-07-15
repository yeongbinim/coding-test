function solution(X) {
	const d = Array(X + 1);
	d[1] = [0, []];
	for (let i = 2; i <= X; i++) {
		let min = d[i - 1][0];
		let temp = i - 1;
		if (i % 3 === 0 && d[i / 3][0] < min) {
			min = d[i / 3][0];
			temp = i / 3;
		}
		if (i % 2 === 0 && d[i / 2][0] < min){
			min = d[i / 2][0];
			temp = i / 2;
		};
		d[i] = [min + 1, [...d[temp][1], temp]];
		// console.log("d[" + i + "] = " + temp);
	}
	d[X][1].push(X);
	return [d[X][0], d[X][1].reverse().join(" ")];
}
const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const X = parseInt(line);

console.log(solution(X).join("\n"));