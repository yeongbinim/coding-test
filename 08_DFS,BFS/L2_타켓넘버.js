function recur(numbers, target, level, sum){
	if (level === numbers.length)
		return sum === target ? 1 : 0;
	return recur(numbers, target, level + 1, sum + numbers[level]) 
		+ recur(numbers, target, level + 1, sum - numbers[level]);
}

function solution(numbers, target) {
    let answer = recur(numbers, target, 0, 0);
    return answer;
}