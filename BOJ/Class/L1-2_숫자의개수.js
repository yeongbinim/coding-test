function solution(numList) {
	const countList = Array(10).fill(0);
	let total = (numList[0] * numList[1] * numList[2]).toString();
	for (let i = 0; i < total.length; i++) countList[+total[i]]+=1;

	return countList;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const numList = lines.map(item => +item);
console.log(solution(numList).join("\n"));