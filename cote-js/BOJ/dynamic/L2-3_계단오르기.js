// dp[curIdx] = [max(dp[curIdx - 2]) + curScore, dp[curIdx - 1][0] + curScore]

function solution(stairs) {
	stairs.unshift(0);
	const dp = new Array(stairs.length + 1);
	dp[0] = [0, 0];
	dp[1] = [stairs[1], stairs[1]];
	for (let i = 2; i < stairs.length; i++)
		dp[i] = [Math.max(...dp[i - 2]) + stairs[i], dp[i - 1][0] + stairs[i]];
	return Math.max(...dp[stairs.length - 1]);
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const stairs = lines.map(score => +score);

console.log(solution(stairs).toString());