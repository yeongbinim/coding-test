function solution(notListens, notLooks) {
	const dict = new Map(notListens.map(notListen => [notListen, true]));
	const notLLs = notLooks.filter(notLook => dict.get(notLook)).sort();
	return [notLLs.length, ...notLLs];
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = lines.shift().split(" ");
const notListens = lines.slice(0, N);
const notLooks = lines.slice(N);
console.log(solution(notListens, notLooks).join("\n"));