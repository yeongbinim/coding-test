function solution(coins, K) {
    let answer = 0;
	for (let coin of coins.reverse()) {
		answer += parseInt(K / coin);
		K -= parseInt(K / coin) * coin;
		if (K === 0) break;
	}
	return answer;
}
// const lines = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = lines.shift().split(" ");
const coins = lines.map(line => +line);
console.log(solution(coins, +K));