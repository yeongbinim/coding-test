function solution(arr, idxList) {
	for (let i = 1; i < arr.length; i++) arr[i] += arr[i - 1];
	arr.unshift(0);
	return idxList.map(([s, e]) => arr[e] - arr[s - 1]);
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const arr = lines.shift().split(" ").map(item => +item);
const idxList = lines.map(line => line.split(" ").map(item => +item));
console.log(solution(arr, idxList).join("\n"));