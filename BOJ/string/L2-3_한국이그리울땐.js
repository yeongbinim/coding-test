function solution(pattern, strTable) {
	let answer = "";
	for (str of strTable) {
		const idx = pattern.indexOf('*');
		if (idx > 0) {
			const prefix = pattern.slice(0, idx);
			const suffix = pattern.slice(idx + 1);
			const prefixIdx = str.indexOf(prefix);
			const suffixIdx = str.lastIndexOf(suffix);
			if (prefixIdx == 0 && suffixIdx == str.length - suffix.length && prefixIdx + prefix.length <= suffixIdx)
				answer += "DA\n";
			else
				answer += "NE\n";
		}
	}
	return answer;
}



// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
let pattern = lines.shift();
let strTable = [];
for (let line of lines) strTable.push(line);
console.log(solution(pattern, strTable));