function solution(participant, completion) {
    const hashMap = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i];
        let b = completion[i];
        hashMap.set(a, (hashMap.get(a) || 0) + 1);
        hashMap.set(b, (hashMap.get(b) || 0) - 1);
    }

    for(let [k, v] of hashMap) {
        if(v > 0)
            return k;
    }
    return 'nothing';
}