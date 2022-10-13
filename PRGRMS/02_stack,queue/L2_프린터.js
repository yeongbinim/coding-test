function solution(priorities, location) {
	let answer = 0, l = 0, len = priorities.length;
	let sortedP = [...priorities].sort((a, b) => {return b - a;});
	while(true){
		if (priorities[l] == sortedP[0]){
			priorities[l] = 0;
			sortedP.shift();
			answer += 1;
			if (l == location)
				break;
		}
		l = (l + 1) % len;
	}
    return answer;
}