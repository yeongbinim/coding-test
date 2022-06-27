//[입력] 문자열
//[처리] keyboard에서 각 문자를 찾아서 입력받은 단어의 글자마다 매번 가장 가까운 거리의 글자를 택해서 거리계산
//[출력] 거리합, 거리개수
const keyboard = [
	"가호저론남드부이프설",
	"알크청울키초트을배주",
	"개캠산대단지역구너양",
	"라로권교마쿼파송차타",
	"코불레뉴 서한산리개",
	"터강봄토캠상호론운삼",
	"보람이경아두프바트정",
	"스웨어쿼일소라가나도",
	"판자비우사거왕태요품",
	"안배차캐민광재봇북하"].map((str) => str.split(""));

function bfs(startX, startY, end) {
	const visit = [Array(keyboard[0].length + 2).fill(-1), 
					...keyboard.map(() => [-1, ...Array(keyboard[0].length).fill(0), -1]),
					Array(keyboard[0].length + 2).fill(-1)];
	let idx = 0;
	const q = new Array();
	const regular = [[-1, 0], [0, -1], [1, 0], [0, 1]];

	if (keyboard[startX][startY] === end) return [startX, startY, 0];
	
	q.push([startX + 1, startY + 1]);
	while (q.length > idx) {
		let [curX, curY] = q[idx++];
		for (let r of regular) {
			const nextX = curX + r[0];
			const nextY = curY + r[1];
			if (visit[nextX][nextY] === 0) {
				visit[nextX][nextY] = visit[curX][curY] + 1;
				q.push([nextX, nextY]);
				if (keyboard[nextX - 1][nextY - 1] === end)
					return [nextX - 1, nextY - 1, visit[nextX][nextY]];
			}
		}
	}
	return [startX, startY, -1];
}

function solution(word) {
	const answer = [0, 0];
	let flag = false;
	let i = 0, j = 0, length;
	for (let w of word) {
		[i, j, length] = bfs(i, j, w);
		if (length >= 0 && flag) {
			answer[0] += length;
			answer[1]++;
		} else if (length < 0) {
			flag = false;
			answer[0] += 20;
			answer[1]++;
		} else flag = true;
	}
	return answer;
}

console.log(solution("부스트캠프")); //30, 4
console.log(solution("부슈트캠프")); //35, 3
console.log(solution("불레뉴캠프")); //7, 4
console.log(solution("뉴$솔레어")); //43, 3
console.log(solution("뉴뉴")); //0, 1
console.log(solution("똥스트캠프")); //37, 4
console.log(solution("똥똥트캠프")); //55, 4