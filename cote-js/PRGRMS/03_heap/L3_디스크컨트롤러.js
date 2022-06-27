function solution(jobs) {
	let time = 0, total = 0, jobsLen = jobs.length;
	let readyQ = [];

	jobs.sort((a, b) => {return (a[0] - b[0])});
	while (jobs.length || readyQ.length){
		while (jobs.length && jobs[0][0] <= time){
			readyQ.push(jobs.shift());
			readyQ.sort((a, b) => {return (a[1] - b[1])});
		}
		if (readyQ.length){
			let cpu = readyQ.shift();
			time += cpu[1];
			total += time - cpu[0];
		}
		else
			time += 1;
	}
    return Math.floor(total/jobsLen);
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));