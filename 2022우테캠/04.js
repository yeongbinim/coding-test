/*
<input>
numstrs: 변환 되고 난 후의 문자열 리스트
words: 변환 되기 전의 숫자문자열 리스트
<ouput>
각 word가 변환 가능한 모든 문자열이 numstrs에 있는 횟수를 반환
*/

const dict = [
	['O', '()'],
	['I'],
	['Z', 'S', '7_'],
	['E', 'B'],
	['A'],
	['Z', 'S'],
	['b', 'G'],
	['T', 'Y'],
	['B', 'E3'],
	['g', 'q'],
];

//word를 dict에 해당하는 문자열로 변환 후에 가능한 모든 문자열들을 반환
function transform(word){
	const wordArr = new Array();
	return wordArr;
}

function solution(numstrs, words){
	let count;
	const answer = new Array();

	for (let word of words){
		count = 0;
		let wordArr = transform(word);
		for (let str of numstrs){
			for (let w of wordArr){
				if (str.includes(w))
					count += 1;
			}
		}
		answer.push(count);
	}
	return answer;
}