function solution(num) {
	const dp = new Array(num + 1);
	dp[1] = 1n;
	dp[2] = 2n;
	
	for (let i = 3; i <= num; i++) dp[i] = dp[i - 1] + dp[i - 2];
	return dp[num] % 10007n;
}
const line = require("fs").readFileSync("../input.txt").toString().trim();
// const line = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = +line;

console.log(solution(num).toString());