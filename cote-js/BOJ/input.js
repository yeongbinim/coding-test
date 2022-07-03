const lines = require("fs").readFileSync("./input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let [n, _, start] = lines.shift().split(" ").map(item => parseInt(item));
let edges = [];
for (let line of lines)
	edges.push(line.split(" ").map(item => parseInt(item)));

console.log(n, edges, start);