#include <vector>
#include <iostream>
#include <string>
#include <stack>
#include <list>
#include <algorithm>

using namespace std;

stack<int> st;
vector<int> visit;
vector<list<int> > scc;
vector<list<int> > graph;
vector<list<int> > reverse_graph;

//sort함수 사용시 사용할 기준함수
bool compare(int a, int b) {
	return a < b;
}
bool compare2(list<int> a,list<int> b) {
	int tempA = a.size() ? a.front() : 9999999;
	int tempB = b.size() ? b.front() : 9999999;
	return tempA < tempB;
}

//간선이 뒤집힌 graph를 탐색하는 dfs함수로, visit에 leader를 넣어준다.
void dfs2(int x, int leader) {
	visit[x] = 1;
	scc[leader].push_back(x);
	for (int k : reverse_graph[x]) {
		if (visit[k])
			continue;
		dfs2(k, leader);
	}
}

//초기 graph를 탐색하는 dfs함수로, visit를 체크하며 마지막 vertex를 stack에 넣는다.
void dfs(int x) {
	visit[x] = 1;
	for (int k : graph[x]) {
		if (visit[k])
			continue;
		dfs(k);
	}
	st.push(x);
}


int main() {
	int n, m, i, g, count = 0;
	int temp1, temp2;
	cin >> n >> m;
    scc.resize(n + 1);
	visit.resize(n + 1);
	graph.resize(n + 1);
	reverse_graph.resize(n + 1);
	
	// 입력단계에 일반 graph와 간선이 뒤집힌 reverse_graph를 초기화
	for (i = 0; i < m; i++) {
		cin >> temp1 >> temp2;
		graph[temp1].push_back(temp2);
		reverse_graph[temp2].push_back(temp1);
	}

	//첫번째 dfs
	for (g = 1; g <= n; g++){
		if (!visit[g])
			dfs(g);
	}

	//visit 초기화
	for(g = 1; g <= n; g++)
        visit[g]=0;
    
    //reverse_graph 정렬
    for (g = 1; g <= n; g++)
		reverse_graph[g].sort(compare);
	
    //두번째 dfs
	while (!st.empty()){
        int leader = st.top();
        st.pop();
        if (visit[leader])
			continue;
        dfs2(leader, leader);
    }
    
    for (g = 1; g <= n; g++)
        scc[g].sort(compare);

    //출력
    for (g = 1; g <= n; g++){
        if (scc[g].size())
            count += 1;
    }
	sort(scc.begin(), scc.end(), compare2);
    cout << count << endl;
	for (i = 0; i < n; i++){
		if (!scc[i].size())
			break;
        for (auto k : scc[i]) 
			cout << k << " ";
        cout << -1 << endl;
    }

	return 0;
}