/*
지역이 아닌, 하나의 티켓을 노드라고 생각, [티켓의 목적지]->[티켓의 출발지]가 간선
그리고, dfs
*/
let graph, visit, answer;

function dfs(cur, count){
    visit[cur] = true;
    if (count === 1){
        answer.push(cur);
        return true;
    }
    for (let next of graph[cur]){
        if (!visit[next]){
            let temp = dfs(next, count - 1);
            if (temp){
                answer.push(cur);
                return true;
            }
        }
    }
    visit[cur] = false;
    return false;
}

function solution(tickets) {
    answer = new Array();
    graph = new Array(tickets.length);
    visit = new Array(tickets.length);
    //ticket을 노드로 하는 그래프 만들기 
    tickets.sort((f, s) => (f[1] > s[1] ? 1 : (f[1] < s[1] ? -1 : 0)));
    for (let i = 0; i < tickets.length; i++){
        graph[i] = new Array();
        tickets.forEach((t, j) => {if (t[0] === tickets[i][1]) graph[i].push(j);});
    }
    //출발지가  ICN인 티켓(노드)만 dfs실행
    for (let j = 0; j < tickets.length; j++){
        if (tickets[j][0] == "ICN" && dfs(j, tickets.length))
            break;
    }
    //들린 곳들만 추가해서 ICN 처음에 추가
    let temp = answer.map(k => tickets[k][1]);
    temp.push("ICN");
    return temp.reverse();
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));