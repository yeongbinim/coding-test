//hard thing: 노드는 rIdx, bIdx의 조합, 간선 규칙은 쭉 이동하기
//예외: 공이 같이 들어갈 경우: 문제 상에서 실패라고 해서 최단경로를 찾던 중 그렇게 되면 

function regular(wall, rIdx, bIdx, eIdx, r) { //0:좌, 1:우, 2:상, 3:하
	const regularXY = [[0, -1], [0, 1], [-1, 0], [1, 0]];
	function move([curX, curY], [ballX, ballY], [dX, dY]) {
		while (true) { //벽 만날때까지 이동
			const nextX = curX + dX;
			const nextY = curY + dY;
			if ((ballX === nextX && ballY === nextY)
				|| wall[nextX][nextY] === -1
				|| (eIdx[0] === nextX && eIdx[1] === nextY)){
					
				if (eIdx[0] === nextX && eIdx[1] === nextY) return [nextX, nextY];
				else return [curX, curY];
			} //공, 벽, 구멍 만날때까지 이동
			curX = nextX;
			curY = nextY;
		}
	}
	if ((r === 0 && rIdx[1] < bIdx[1])
		|| (r === 1 && rIdx[1] > bIdx[1])
		|| (r === 2 && rIdx[0] < bIdx[0])
		|| (r === 3 && rIdx[0] > bIdx[0])
	) {
		rIdx = move(rIdx, bIdx, regularXY[r]);
		bIdx = move(bIdx, rIdx, regularXY[r]);
	}
	else {
		bIdx = move(bIdx, rIdx, regularXY[r]);
		rIdx = move(rIdx, bIdx, regularXY[r]);
	}
	return [...rIdx, ...bIdx];
}

function bfs(wall, startNode, endIdx) {
	let idx = 0;
	const q = [];
	const visit = new Map();
	visit.set(startNode.slice(0,4).join(","), true);
	q.push(startNode);
	while (idx < q.length) {
		const curNode = q[idx++];
		for (let r = 0; r < 4; r++) {
			const nextNode = regular(wall, [curNode[0], curNode[1]], [curNode[2], curNode[3]], endIdx, r);
			nextNode.push(curNode[4] + 1);
			const nString = nextNode.slice(0,4).join(",");
			if (visit.get(nString)) continue;
			visit.set(nString, true);

			if (nextNode[4] > 10) return -1;
			if (nextNode[2] === endIdx[0] && nextNode[3] === endIdx[1]) continue;
			if (nextNode[0] === endIdx[0] && nextNode[1] === endIdx[1]) return nextNode[4];
			q.push(nextNode);
			console.log(`nextNode: ${nextNode}`);
		}
	}
	return -1;
}

function solution(graph) {
	let rBallIdx, bBallIdx, hollIdx;
	const wall = graph.map((line, i) => line.split("").map((l, j) => {
		if (l === '#') return -1;
		else if (l === "O") hollIdx = [i, j];
		else if (l === 'R') rBallIdx = [i, j];
		else if (l === 'B') bBallIdx = [i, j];
		return 0;
	}));
	return bfs(wall, [...rBallIdx, ...bBallIdx, 0], hollIdx);
}
const lines = require("fs").readFileSync("../input.txt").toString().trim().split('\n');
// const lines = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
lines.shift();
let graph = [];
for (let line of lines) graph.push(line);
console.log(solution(graph));