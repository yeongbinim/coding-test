#include <iostream>
#include <string>
#include <vector>

using namespace std;

int char_table[256];//각 문자의 마지막 인덱스를 저장할 배열

//크기 256의 char_table를 모두 -1로 세팅하고,
//각 문자(아스키코드)에 pattern인덱스를 순차적으로 넣어주며 최종적으로 뒤의 인덱스가 set되게 한다.
void lastOccurenceFunction(string pattern) {
	int i;
	int pattern_len = (int)pattern.size();
 
    for (i = 0; i < 256; i++)
        char_table[i] = -1;
    for (i = 0; i < pattern_len; i++) 
        char_table[(int) pattern[i]] = i;
}

/*
1. 먼저 pattern 전처리를 통해 lastOccurenceFunction 배열을 만든다.(pattern 각 문자의 마지막 인덱스 저장)
2. 목표 문자열(str) 크기만큼의 반복문 동안 아래를 반복한다.
pattern의 마지막 인덱스와 해당 위치의 str 인덱스의 문자를 서로 비교한다.
	(1) match경우: 일치 문자의 개수가 pattern의 길이라면 문자열일치, 아니라면 패턴 내의 왼쪽 인덱스 문자 탐색하도록 i, j를 감소시킨다.
	(2) mismatch경우: j를 다시 pattern의 마지막으로 이동하고, i를 lastOccurenceFunction배열을 참고해 인덱스를 변경한다.
*/
vector<int> boyerMoore(string str, string pattern) {
	int n = str.size();
	int m = pattern.size();
	lastOccurenceFunction(pattern);
	int i = m - 1, j = m -1;
	int move_len, l;

	vector<int> ans;

	while (i < n) {
		if (str[i] == pattern[j] || pattern[j] == 'X') { // (1) - match
			if (j == 0) { //문자열 일치
				ans.push_back(i);
				i += m;
				j = m - 1; //j를 pattern 맨 뒤로 세팅
				cout << 1 << " "; //<출력> 문자열이 일치할 경우 이동거리는 무조건 1
			}
			else { //패턴 내의 왼쪽 인덱스 문자 탐색
				i--;
				j--;
			}
		}
		else { // (2) - mismatch
			//찾고자 하는 문자와 'X' 중에 더 뒤에 있는 문자 인덱스를 기준으로 l을 잡는다.
			l = char_table[(int)str[i]] > char_table[(int)'X'] ? char_table[(int)str[i]] : char_table[(int)'X'];
			//만약 j보다 더 뒤에 있는 곳에서 index를 찾았다면 i를 m-j만큼 이동, 아니면 m-1+l 만큼 이동
			move_len = j < (1 + l) ? m - j : m - (1 + l);
			i += move_len;
			//<출력> pattern의 이동거리 = (j가 이동할 거리 - pattern 마지막 인덱스 기준 j위치)
			cout << move_len - (m - 1 - j) << " ";
			//j를 pattern 맨 뒤로 세팅
			j = m - 1;
		}
	}
	cout << endl;
	return ans;
}

int main() {
	string str, pattern;
	cin >> str >> pattern; //문자열 두개를 입력받는다.
	vector<int> ans = boyerMoore(str, pattern);
	for (auto i: ans)
		cout << i << " ";
	cout << endl;
	return 0;
}