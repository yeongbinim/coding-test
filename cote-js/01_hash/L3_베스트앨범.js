function solution(genres, plays) {
	let hashMap = new Map();
	let playlist = new Array();

	genres.forEach((genre, i) => {
		hashMap.set(genre, hashMap.get(genre) + plays[i] || plays[i]);
		playlist.push([genre, plays[i], i]);
	});
	playlist.sort((a, b) => {
		if(a[0] !== b[0]) return hashMap.get(b[0]) - hashMap.get(a[0]);
		else if (a[1] !== b[1]) return b[1] - a[1];
    	return a[2] - b[2];
	});

	let count = 0;
	let genre = "";
	let answer = playlist.filter((music) => {
		if (genre === music[0]) {
			count += 1;
			if (count >= 2) return false;
		}
		else 
			count = 0;
		genre = music[0];
		return true;
	}).map((music) => music[2]);
	return answer;
}