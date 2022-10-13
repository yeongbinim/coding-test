function solution(dict, quizs) {
	const dictionary = new Map();
	for (let [idx, name] of dict.entries()) dictionary.set(name, `${idx + 1}`);
	return quizs.map(quiz => parseInt(quiz) ? dict[+quiz - 1] : dictionary.get(quiz));
}

const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = lines[0].split(" ").map((num) => +num);
const dict = [];
for (let n = 1; n <= N; n++) dict.push(lines[n]);
const quizs = [];
for (let m = N + 1; m <= N + M; m++) quizs.push(lines[m]);

console.log(solution(dict, quizs).join("\n"));