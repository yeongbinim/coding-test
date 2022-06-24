#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<int> getPi(string str) {//Failure Function - O(m)time
	int m = (int)str.size();
	int i, j = 0;
	vector<int> pi(m, 0);

	for (i = 1; i < m; i++) {
		while (j > 0 && str[i] != str[j])
			j = pi[j - 1];
		if (str[i] == str[j])
			pi[i] = ++j;
	}

	return pi;
}

/*
1. 먼저 pattern 전처리를 통해 failure function 배열을 만든다.
2. 목표 문자열(str) 크기만큼의 반복문 동안 아래를 반복한다.
case1 - str문자 == pattern문자: 패턴 크기만큼 조회했다면 ans에 현재 위치 추가
case2 - str문자 != pattern문자: j > 0이면 failure function의 j-1위치의 값을 j에 대입
case3 - str문자 != pattern문자: j == 0이면 j는 그대로, i만 증가
*/
vector<int> kmp(string str, string pattern) {
	int n = str.size();
	int m = pattern.size();
	int i, j = 0;

	vector<int> pattern_pi = getPi(pattern); //pattern preprocessing
	vector<int> ans;
	for (i = 0; i < n; i++) {
		while (j > 0 && str[i] != pattern[j]){ //mismatch(case 2) - 이 부분 보이어 무어처럼 변경가능
			cout << j - pattern_pi[j - 1] << " "; //출력: 현재 j - 다음 j
			j = pattern_pi[j - 1];
		}
		if (str[i] == pattern[j]) { //match(case 1)
			if (j == m - 1){
				cout << j + 1 - pattern_pi[j] << " "; //출력: 현재 j+1(pattern size) - 다음 j
				ans.push_back(i - m + 1);
				j = pattern_pi[j];
			}
			else
				j++;
		} else //mismatch(case 3)
			cout << 1 << " "; //출력: 1
	}
	cout << endl;
	return ans;
}

int main() {
	string str, pattern;
	cin >> str >> pattern;
	vector<int> ans = kmp(str, pattern);
	for (auto i: ans)
		cout << i << " ";
	cout << endl;
	return 0;
}