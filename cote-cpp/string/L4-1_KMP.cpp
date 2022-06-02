#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<int> getPi(string str) {
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


vector<int> kmp(string str1, string str2) {
	int n = str1.size();
	int m = str2.size();
	int i, j = 0;

	vector<int> str2_pi = getPi(str2);
	vector<int> ans;
	for (i = 0; i < n; i++) {
		while (j > 0 && str1[i] != str2[j]){ //건너 뛰는 단계
			cout << j - str2_pi[j - 1] << " ";
			j = str2_pi[j - 1];
		}
		if (str1[i] == str2[j]) {
			if (j == m - 1){
				cout << m - str2_pi[j] << " ";
				ans.push_back(i - m + 1);
				j = str2_pi[j];
			}
			else
				j++;
		} else
			cout << 1 << " ";
	}
	cout << endl;
	return ans;
}

int main() {
	string str1, str2;
	cin >> str1 >> str2;
	vector<int> ans = kmp(str1, str2);
	for (auto i: ans)
		cout << i << " ";
	cout << endl;
	return 0;
}