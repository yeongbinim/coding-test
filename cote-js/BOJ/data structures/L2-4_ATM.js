function solution(times) {
	let answer;
	const dp = new Array(times.length);

	times.sort((a, b) => a - b);
	answer = dp[0] = times[0];
	for (let t = 1; t < times.length; t++) {
		dp[t] = dp[t - 1] + times[t];
		answer += dp[t];
	}
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const times = lines[1].split(" ").map(item => +item);
console.log(solution(times).toString());