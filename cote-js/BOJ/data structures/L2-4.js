function execute() {
	const stack = [];
	return function(command) {
		switch(command[0]) {
			case "pop":
				return stack.pop() || -1;
			case "top":
				return stack.length > 0 ? stack[stack.length - 1] : -1;
			case "empty":
				return stack.length === 0 ? 1 : 0;
			case "size":
				return stack.length;
			case "push":
				stack.push(command[1]);
			default:
				return -2;
		}
	}
}

function solution(commands) {
	const answer = [];
	const execCommand = execute();
	
	for (let command of commands) {
		const ans = execCommand(command);
		if (ans !== -2) answer.push(ans);
	}
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const commands = lines.map((line) => line.split(" "));
console.log(solution(commands).join("\n"));