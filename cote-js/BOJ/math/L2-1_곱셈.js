function solution(a, b, n) {
    let f = BigInt(1);
    let bin_b = b.toString(2);
	// console.log(bin_b, bin_b[2]);
    let k = bin_b.length;
	for (let i = 0; i < k; i++) {
		f = (f * f) % n;
		if (bin_b[i] === '1')
            f = (f * a) % n;
	}
	return parseInt(f);
}
const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const [A, B, C] = line.split(" ").map(BigInt);

console.log(solution(A, B, C).toString());