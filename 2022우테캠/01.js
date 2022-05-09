/*
<input>
salaries : [[이 직원의 입금 지급 간격, 이 직원의 1회 입금 비용], [], ...] 
days : 날짜
<ouput>
days까지 누적된 모든 직원들의 금액 총액(마지막 날에 못받은 사람은 1회 입금비용 주기)
*/

function solution(salaries, days){
	let answer = 0;
	// 날짜가 지나면서 직원에게 입금해주기
	for (let day = 1; day <= days; day++){
		for (let salary of salaries){
			if (day % salary[0] == 0)
				answer += salary[1];
		}
	}
	// 못받은 직원은 1회 입금비용 받기
	for (let salary of salaries){
		if (days % salary[0] !== 0)
			answer += salary[1];
	}
	return answer;
}