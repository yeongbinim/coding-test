function solution(numList) {
	const dp = new Array(41);
	dp[0] = [1, 0];
	dp[1] = [0, 1];
	for (let i = 2; i < 41; i++)
		dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
	return numList.map(num => dp[num].join(" "));
}
const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const numList = lines.map(line => +line);

console.log(solution(numList).join("\n"));