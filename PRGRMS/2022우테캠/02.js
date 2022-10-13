/*
<input>
scores: [[이 학생의 1번문제 점수, 이 학생의 2번문제 점수], [], [], ...]
<ouput>
scores를 다음의 우선순위로 정렬해서 각 학생들의 순위를 반환
우선순위 1: 총점이 높은 응시자의 순위가 앞선다.
우선순위 2: 어려운 문제에서(평균이 더 낮은 문제) 더 높은 점수를 받은 응시자의 순위가 앞선다.
우선순위 3: ID 번호가 빠른 응시자의 순위가 앞선다.
*/

let sum1 = 0, sum2 = 0;

function sortFuction(a, b){
	let sumA = a[0] + a[1];
	let sumB = b[0] + b[1];
	if (sumA < sumB) return 1;
	else if (sumA > sumB) return -1;
	else {
		if (sum1 < sum2){
			if (a[0] < b[0]) return 1;
			else if (a[0] > b[0]) return -1;
			else return a[2] - b[2];
		}
		else if (sum1 > sum2){
			if (a[1] < b[1]) return 1;
			else if (a[1] > b[1]) return -1;
			else return a[2] - b[2];
		}
		else return a[2] - b[2];
	}
}

function solution(scores){
	let answer;
	scores.forEach(score => {sum1 += score[0]; sum2 += score[1];});
	const scores2 = scores.map((score, idx) => {score.push(idx + 1); return score;})
	scores2.sort(sortFuction);
	const scores3 = scores2.map((score, idx) => {score.push(idx + 1); return score;}) 
	scores3.sort((a, b) => (a[2] - b[2]));
	answer = scores3.map(score => score[3]);
	return answer;
}
