function solution(n, idxList) {
	idxList.push(idxList[0]);
	let total = 0;
	for (let i = 0; i < n; i++)
		total += idxList[i][0] * idxList[i + 1][1] - idxList[i + 1][0] * idxList[i][1];
	return Math.abs(total / 2).toFixed(1);
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
n = +lines.shift();
const idxList = lines.map(line => line.split(" ").map(item => +item));
console.log(solution(n, idxList).toString());