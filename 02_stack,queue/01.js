function solution(progresses, speeds) {
    let i, count = 0, answer = [];
	while(progresses.length){
		for (i = 0; i < progresses.length; i++)
			progresses[i] += speeds[i];
		while (progresses[0] >= 100){
			progresses.shift();
			speeds.shift();
			count++;
		}
		if (count > 0){
			answer.push(count);
			count = 0;
		}
	}
    return answer;
}