function dfs(computers, visit, nodeN){
	visit[nodeN] = true;

	for (let i = 0; i < computers.length; i++){
		if (computers[nodeN][i] == 1 && !visit[i])
			dfs(computers, visit, i);
	}
}

function solution(n, computers) {
	const visit = Array(n).fill(false);
	let answer = 0;
	for (let i = 0; i < n; i++){
		if (!visit[i]){
			dfs(computers, visit, i);
			answer += 1;
		}
	}
    return answer;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]);