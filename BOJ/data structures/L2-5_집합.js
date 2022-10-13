function execute() {
	let set = 0;
	return function(command) {
		switch(command[0]) {
			case "check":
				return (set & Math.pow(2, command[1] - 1)) > 0 ? 1 : 0;
			case "add":
				set = set | Math.pow(2, command[1] - 1);
				break;
			case "remove":
				set = set & ~Math.pow(2, command[1] - 1);
				break;
			case "toggle":
				set = (set & Math.pow(2, command[1] - 1)) > 0 ? set = set & ~Math.pow(2, command[1] - 1) : set | Math.pow(2, command[1] - 1);
				break;
			case "all":
				set = 1048575;
				break;
			case "empty":
				set = 0;
				break;
			default:
				break;
		}
		return -1;
	}
}

function solution(commands) {
	const answer = [];
	const execCommand = execute();
	
	for (let command of commands) {
		const ans = execCommand(command);
		if (ans !== -1) answer.push(ans);
	}
	return answer;
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
const commands = lines.map((line) => line.split(" "));
console.log(solution(commands).join("\n"));