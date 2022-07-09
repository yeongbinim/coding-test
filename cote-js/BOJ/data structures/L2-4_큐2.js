function execute() {
	const queue = [];
	let idx = 0;
	return function(command) {
		switch(command[0]) {
			case "pop":
				return queue.length > idx ? queue[idx++] : -1;
			case "front":
				return queue.length > idx ? queue[idx] : -1;
			case "back":
				return queue.length > idx ? queue[queue.length - 1] : -1;
			case "empty":
				return queue.length === idx ? 1 : 0;
			case "size":
				return queue.length - idx;
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