let graph, visit, min = 999;

function diff(word1, word2){
	let diff = 0;
	for(let i = 0; i < word1.length; i++) {
		if (word1[i] !== word2[i])
			diff++;
		// 비교하는 두 단어가 2개 이상 다를 경우 false return
		if (diff > 1)
			return false;
	}
	if (diff === 0)
		return false;
	return true;
}

function makeGraph(begin, words){
	graph[0] = [];
	for (let [idx, word] of words.entries()){
		if (diff(begin, word))
			graph[0].push(idx + 1);
	}
	for (let [idx1, word1] of words.entries()){
		graph[idx1 + 1] = [];
		for (let [idx2, word2] of words.entries()){
			if (diff(word1, word2))
				graph[idx1 + 1].push(idx2 + 1);
		}
	}
	return graph;
}


function dfs(cur, count, words, target){
    visit[cur] = true;
    if (target === words[cur - 1]){
		min = min > count? count : min;
        return;
    }
    for (let next of graph[cur]){
        if (!visit[next])
            dfs(next, count + 1, words, target);
    }
    visit[cur] = false;
    return;
}

function solution(begin, target, words) {
	visit = new Array(words.length + 1).fill(false);
	graph = new Array(words.length + 1);
	makeGraph(begin, words);
	dfs(0, 0, words, target);
    return min === 999 ? 0 : min;
}


console.log(solution("hit", "hhh", ["hhh","hht"]));