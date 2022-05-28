const TEMPLATE = '<input type="text">';

class SearchInput {
	constructor({$target, onSearch}) {
		this.$target = document.createElement('div');
    	this.$target.className = 'box';
		$target.appendChild(this.$target);

		$target.addEventListener("keyup", e => {
			const value = e.target.closest(".SearchInput").value;
			if (e.keyCode === 13) {
				onSearch(value);
			}
		});

		this.render();
		$target.addEventListener("click", (e) => {
			const $theme = e.target.closest(".Theme");
			if ($theme){
				if ($theme.checked) {
					document.body.classList.remove("light");
					document.body.classList.add("dark");
				}
				else {
					document.body.classList.remove("dark");
					document.body.classList.add("light");
				}
			}
			else if (e.target.closest(".Random"))
				return ;
		});
		// 	const theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		// 	if (theme && !$themeMode.checked) {
		// 		document.body.classList.remove("light");
		// 		document.body.classList.add("dark");
		// 	} else if (theme && $themeMode.checked) {
		// 		document.body.classList.remove("dark");
		// 		document.body.classList.add("light");
		// 		console.log("hi2");
		// 	}
		// 	console.log(theme);
		// 	console.log($themeMode.checked);
		// })
		// $target.appendChild($themeMode);
	}
	render() {
		this.$target.innerHTML = `
			<input class="Theme" type="checkbox" ${window.matchMedia("(prefers-color-scheme: dark)").matches ? "checked" : ""}/>
			<input class="SearchInput" placeholder="고양이를 검색해보세요.|" autofocus/>
			<button class="Random">랜덤버튼</button>
		`;
	}
}