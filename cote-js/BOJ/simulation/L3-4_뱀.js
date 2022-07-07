//input:행열 크기, 사과 위치들 / output:게임맵
function makeGameMap(N, idxList) {
	const gameMap = [Array(N + 2).fill(-1), ...Array.from(Array(N), () => [-1, ...Array(N).fill(0),-1]), Array(N + 2).fill(-1)];
	for (let [i, j] of idxList) gameMap[i][j] = 5; //사과 체크
	return gameMap;
}

//input:게임 맵, 뱀 객체, 이동할 시간 / ouput: [사과먹은 초 || 부딪힌 시간]
function moveUntil(gameMap, snake, time) {
	const pattern = [[0, 0], [-1, 0], [0, 1], [1, 0], [0, -1]]; //상 우 하 좌
	const direction = gameMap[snake.headIdx[0]][snake.headIdx[1]];
	for (let t = 1; t <= time; t++) {
		const [hx, hy] = pattern[direction];

		snake.headIdx[0] += hx;
		snake.headIdx[1] += hy;
		if (gameMap[snake.headIdx[0]][snake.headIdx[1]] === 0) {
			const [tx, ty] = pattern[gameMap[snake.tailIdx[0]][snake.tailIdx[1]]];
			gameMap[snake.tailIdx[0]][snake.tailIdx[1]] = 0;
			snake.tailIdx[0] += tx;
			snake.tailIdx[1] += ty;
		} else if (gameMap[snake.headIdx[0]][snake.headIdx[1]] !== 5) return t - 1; //벽이나 몸에 부딪힘
		gameMap[snake.headIdx[0]][snake.headIdx[1]] = direction;
	}
	return time;
}

function solution(N, idxList, changeList) {
	const snake = {headIdx: [1, 1], tailIdx: [1, 1]}
	let totalTime = 0;
	const gameMap = makeGameMap(N, idxList);
	
	gameMap[1][1] = 2; //뱀의 시작 위치
	for (let [t, d] of changeList) {
		const moveTime = t - totalTime;
		const time = moveUntil(gameMap, snake, moveTime);
		totalTime += time;
		if (time !== moveTime)
			return totalTime + 1;
		gameMap[snake.headIdx[0]][snake.headIdx[1]] = (gameMap[snake.headIdx[0]][snake.headIdx[1]] + d - 1) % 4 + 1;
	}
	return totalTime + moveUntil(gameMap, snake, N) + 1; //마지막 벽 끝까지 가기
}

// const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = +lines.shift();
const K = +lines.shift();
const idxList = [];
for (let i = 0; i < K; i++) idxList.push(lines.shift().split(" ").map(item => +item));
const L = lines.shift();
const changeList = [];
for (let line of lines) changeList.push(line.split(" ").map(item => item === 'D' ? 1 : (item === 'L' ? 3 : +item)));
console.log(solution(N, idxList, changeList));