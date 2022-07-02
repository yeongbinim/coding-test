function countCompress(str, patternLen) {
    let compress = '';
    let pattern = str.slice(0, 0 + patternLen);
    let count = 0;
    let i;
    for (i = 0; i < str.length; i += patternLen) {
        const compare = str.slice(i, i + patternLen);
        if (pattern !== compare) {
            compress += `${count > 1 ? count : ""}${pattern}`;
            pattern = compare;
            count = 1;
        }
        else
            count++;
    }
    compress += `${count > 1 ? count : ""}${pattern}`;
    return compress.length;
}

function solution(s) {
    const answer = [];
    if (s.length === 1) return 1;
    for (let i = 1; i <= s.length / 2; i++) answer.push(countCompress(s, i));
    return Math.min(...answer);
}