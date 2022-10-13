//규칙: 
//dp[4] 예시: 1+3경우의수 dp[3], 2+2경우의수 dp[2], 3+1경우의수 dp[1]
//dp[5] 예시: 1+4경우의수 dp[4], 2+3경우의수 dp[3], 3+2경우의수 dp[2]
function solution(n) {
	let dp = n > 3 ? new Array(n + 1) : new Array(4); //3보다 작을때 처리
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 4;
	for (let i = 4; i <= n; i++)
		dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
	return dp[n];
}
// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
for (let line of lines) console.log(solution(+line).toString());