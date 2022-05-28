class ImageInfo {
	$imageInfo = null;
	data = null;
	constructor({$target, data, onClick}) {
		const $imageInfo = document.createElement("div");
		$imageInfo.className = "ImageInfo";
		this.$imageInfo = $imageInfo;
		$target.appendChild($imageInfo);
		$imageInfo.addEventListener("click", (e) => {
			if (this.data.visible){
				const exit = e.target.closest(".close");
				const modal = e.target.closest(".content-wrapper");
				if (exit || !modal)
					onClick();
			}
		});
		window.addEventListener("keydown", (e) => {
			if (this.data.visible && e.key === "Escape") onClick();
		});
		this.data = data;
		this.render();
	}

	setState(nextData) {
		this.data = nextData;
		this.render();
	}

	render() {
		if (this.data.visible) {
			const {name, url, temperament, origin} = this.data.image;
			this.$imageInfo.innerHTML = `
				<div class="content-wrapper">
					<div class="title">
					<span>${name}</span>
					<div class="close">x</div>
					</div>
					<img src="${url}" alt="${name}"/>        
					<div class="description">
					<div>성격: ${temperament}</div>
					<div>태생: ${origin}</div>
					</div>
				</div>`;
			this.$imageInfo.style.display = "block";
		} else {
			this.$imageInfo.style.display = "none";
		}
	}
}