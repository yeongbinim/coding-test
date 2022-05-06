function dfs(graph, visit, key, answer){
    visit.set(key, true);
    answer.push(key);
    let aaa = graph.get(key) || [];
    for (let g of aaa){
        if (!visit.get(g))
            dfs(graph, visit, g, answer);
    }
}

function solution(tickets) {
    const answer = [];
	const graph = new Map();
    const visit = new Map();

    for ([start, dest] of tickets){
        let temp = graph.get(start);
        if (temp){
            temp.push(dest);
            temp.sort();
        }
        else {
            graph.set(start, [dest]);
            visit.set(start, false);
        }
    }

    dfs(graph, visit, "ICN", answer);
    return answer;
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));