function execute() {
	const queue = [];
	return function(command) {
		switch(command[0]) {
			case "pop":
				return queue.shift() || -1;
			case "front":
				return queue.length > 0 ? queue[0] : -1;
			case "back":
				return queue.length > 0 ? queue[queue.length - 1] : -1;
			case "empty":
				return queue.length === 0 ? 1 : 0;
			case "size":
				return queue.length;
			case "push":
				queue.push(command[1]);
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

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const commands = lines.map((line) => line.split(" "));
console.log(solution(commands).join("\n"));