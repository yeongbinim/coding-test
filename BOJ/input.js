const lines = require("fs").readFileSync("./input.txt").toString().trim().split('\n');
//const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let [n, _, start] = lines.shift().split(" ").map(item => parseInt(item));
const edges = lines.map((line) => line.split(" ").map(item => parseInt(item)));

console.log(n, edges, start);