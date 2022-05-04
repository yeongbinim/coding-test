function solution(citations) {
	let hIndex = citations.length;
	citations.sort((a, b) => {return (b - a)});
	console.log(citations);
    while (true){
		console.log(hIndex);
		if (hIndex <= citations[hIndex - 1])
			break;
		hIndex -= 1;
	}
    return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]));