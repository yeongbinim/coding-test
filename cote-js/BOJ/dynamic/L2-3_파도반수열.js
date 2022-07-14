function solution(nums) {
	const dp = new Array(101);
	dp[1] = 1n, dp[2] = 1n, dp[3] = 1n, dp[4] = 2n, dp[5] = 2n;
	for (let i = 6; i < 101; i++) dp[i] = dp[i - 5] + dp[i - 1];
	return nums.map(num => dp[num]);
}
const lines = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
lines.shift();
const nums = lines.map(line => +line);

console.log(solution(nums).join("\n"));