function solution(saveList, findList) {
	let dict = new Map(saveList);
	return findList.map(address => dict.get(address));
}
const lines = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = lines.shift().split(" ");
const saveList = lines.slice(0, N).map(line => line.split(" "));
const findList = lines.slice(N);

console.log(solution(saveList, findList).join("\n"));