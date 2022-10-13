//[입력]
//orders: 1~orders.length 손님들의 주문이력,  
//course: 구성하고 싶은 개수들
//[처리] course에 있는 개수만큼 조합 2번이상 나온거 중에 많이 나온거
//[출력] 오름차순된 조합결과

function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
	for (let [fixedIdx, fixed] of arr.entries()) {
		const rest = arr.slice(fixedIdx + 1);
		const combinations = getCombinations(rest, selectNumber - 1);
		results.push(...combinations.map((el) => [fixed, ...el]));
	}
    return results;
}

function solution(orders, course) {
	const answer = [];
	for (let c of course) {
		const hashMap = new Map();
		for (let od of orders) {
			const results = getCombinations(od.split("").sort(), c);
			results.forEach((result) => {const str = result.join(""); hashMap.set(str, (hashMap.get(str) || 0) + 1)});
		}
		const maxNum = Math.max(...hashMap.values());
		if (maxNum > 1) {
			for (let [key ,value] of hashMap) {
				if (value == maxNum)
					answer.push(key);
			}
		}
	}
	return answer.sort();
}

solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);