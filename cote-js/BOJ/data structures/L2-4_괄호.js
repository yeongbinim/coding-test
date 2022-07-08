function validBracket(brackets) {
	const stack = [];
	let flag = true;
	for (let i = 0; i < brackets.length; i++) {
		if (brackets[i] === "(")
			stack.push(1);
		else if (!stack.pop()) {
			flag = false;
			break;
		}
	}
	return flag && stack.length === 0;
}

function solution(lines) {
	const answer = [];

	for (let line of lines)
		answer.push(validBracket(line) ? "YES" : "NO");
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
console.log(solution(lines).join("\n"));