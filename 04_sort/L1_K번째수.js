function solution(array, commands) {
    const answer = [];
    for (let command of commands){
		let tempArr = array.slice(command[0] - 1, command[1])
        tempArr.sort((a,b)=>{return a - b;});
        answer.push(tempArr[command[2] - 1]);
    }
    return answer;
}