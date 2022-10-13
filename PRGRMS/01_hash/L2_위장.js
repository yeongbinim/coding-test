function solution(clothes){
	let hashMap = new Map();
	let num = 1;

	for(let i = 0; i < clothes.length; i++)
		hashMap.set(clothes[i][1], (hashMap.get(clothes[i][1]) || 0) + 1);
	for(let k of hashMap.values())
		num *= k + 1;
	console.log(hashMap);
	return num - 1;
}