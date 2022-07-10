function solution(str) {
	str = str.toUpperCase();
	const dict = Array(26).fill(0);

	for (let s = 0; s < str.length; s++) dict[str.charCodeAt(s) - 65]++;
	const max = Math.max(...dict);
	const idx = dict.indexOf(max);
	return idx !== dict.lastIndexOf(max) ? '?' : String.fromCharCode(idx + 65);
}
// const line = require("fs").readFileSync("../../input.txt").toString().trim();
const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const str = line;
console.log(solution(str));