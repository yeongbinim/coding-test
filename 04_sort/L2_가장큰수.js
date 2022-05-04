function solution(numbers) {
	let answer = numbers.sort((a, b)=>{return parseInt(`${b}${a}`) - parseInt(`${a}${b}`)}).join("");
    return answer[0] === '0' ? '0' : answer;
}
console.log(solution([3, 30, 34, 9, 5]));