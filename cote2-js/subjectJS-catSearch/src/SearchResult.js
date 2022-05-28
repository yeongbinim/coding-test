class SearchResult {
	$searchResult = null;
	data = null;
	onClick = null;
	constructor({$target, initialData, onClick}) {
		this.$searchResult = document.createElement("div");
		this.$searchResult.className = "SearchResult";
		$target.appendChild(this.$searchResult);

		this.data = initialData;
		this.render();
		this.$searchResult.addEventListener("click", (e) => {
			const $item = e.target.closest(".item");
			if ($item) {
				const {index} = $item.dataset;
				onClick(this.data[index]);
			}
		});
		// window.addEventListener('scroll', () => {
		// 	const scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
		// 	const windowHeight = window.innerHeight; // 스크린 창
		// 	const fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

		// 	if (scrollLocation + windowHeight >= fullHeight)
		// 		onScroll();
		// });
	}

	setState(nextData) {
		this.data = nextData;
		this.render();
	}

	render() {
		if (this.data.length === 0)
			this.$searchResult.innerHTML =`<strong>검색된 결과가 없습니다</strong>`;
		else
			this.$searchResult.innerHTML = this.data.map((cat, idx) => `<div class="item" data-index="${idx}"><img src=${cat.url} alt=${cat.name} /></div>`).join("");
	}
}