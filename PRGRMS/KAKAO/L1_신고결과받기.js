function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    const reportMap = new Map();
    
    for (let rep of report) {
        const name = rep.split(" ");
        const reportSet = reportMap.get(name[1]) || new Set();
        reportSet.add(id_list.indexOf(name[0]));
        reportMap.set(name[1], reportSet);
    }
    for (let reportSet of reportMap.values()) {
        if (reportSet.size >= k)
            reportSet.forEach((idx) => {answer[idx] += 1;});
    }
    return answer;
}