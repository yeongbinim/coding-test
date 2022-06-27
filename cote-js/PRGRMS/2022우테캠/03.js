/*
<input>
board:
["ABBCCA"
"AABBBC"
"ABBCDD"
"ACCCDC"]
<ouput>
한 줄을 없앨을때 나오는 빈칸의 최대개수(한 칸이 없어질때 주변에 같은 문자도 없어진다.)
*/

let visit, graph;
const pattern = [[1, 0], [-1, 0], [0, -1], [0, 1]];
function bfs(curX, curY){
	let nextX, nextY;
	let count = 0;
	const value = graph[curX][curY];
	const len = graph.length;
	const q = new Array();

	if (!visit[curX][curY]){
		q.push([curX][curY]);
		visit[curX][curY] = true;
	}
	while (q.length){
		[curX, curY] = q.shift();
		count += 1;
		for (let k = 0; k < 4; k++){
			nextX = curX + pattern[k][0];
			nextY = curY + pattern[k][1];
			if (nextX >= 0 && nextX < len && nextY >= 0 && nextY < len){
				if (!visit[nextX][nextY] && graph[nextX][nextY] === value){
					q.push([nextX, nextY]);
					visit[nextX][nextY] = true;
				}
			}
		}
	}
	return count;
}

function solution(board){
	let max = 0, sum;
	let boardLen = board.length;
	visit = Array.from(Array(boardLen), () => Array(boardLen).fill(false));
	graph = board;

	//행 다 돌리기
	for (let r = 0; r < boardLen; r++){
		sum = 0;
		for (let c = 0; c < boardLen; c++)
			sum += bfs(r, c);
		//visit 0으로 초기화
		for (let v = 0; v < boardLen; v++)
			visit[v].fill(false);
		max = sum > max ? sum : max;
	}
	//열 다 돌리기
	for (let c = 0; c < boardLen; c++){
		sum = 0;
		for (let r = 0; r < boardLen; r++)
			sum += bfs(r, c);
		//visit 0으로 초기화
		for (let v = 0; v < boardLen; v++)
			visit[v].fill(false);
		max = sum > max ? sum : max;
	}
	return max;
}