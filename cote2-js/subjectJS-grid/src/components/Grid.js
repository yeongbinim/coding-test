export default function Grid({$app, initialState, onSearch, onClick}){
    this.state = initialState;
    this.$target = document.createElement("div");
    this.onClick = onClick;
	$app.appendChild(this.$target);

    this.$target.addEventListener("keyup", e => {
        const value = e.target.closest(".SearchInput").value;
        if (e.keyCode === 13) {
            onSearch(value);
        }
    });
    this.count = {};
    this.$target.addEventListener("click", e => {
        const $th = e.target.closest(".th");
        if ($th){
            const {idx} = $th.dataset;
            if (!this.count[idx]){
                for (let c of Object.keys(this.count)){
                    this.count[c] = 0;
                }
                this.count[idx] = 0;    
            }
            this.count[idx] = (this.count[idx] + 1) % 3;
            let sortOrder;
            if (this.count[idx] === 1)
                sortOrder = "ASC";
            else if (this.count[idx] === 2)
                sortOrder = "DESC";
            else
                sortOrder = "default";
            onClick(idx, sortOrder);
        }
    });
    this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	}
    this.render = () => {
        if (!this.state.column.length)
            return "";
        this.$target.innerHTML = `
            <input class="SearchInput"/>
            <table>
            <thead>
            <tr>
                ${this.state.column.map((attr, idx)=> `<th class="th" data-idx="${idx}">${attr}${this.count[idx] ? (this.count[idx]===1 ? "🔼": "🔽"):""}</th>`).join("")}
            </tr>
            </thead>
            <tbody>
                ${this.state.row.map((r)=> 
                    `<tr>${r.map((c)=>{
                        const idx = `${c}`.indexOf(this.state.searchData);
                        return idx !== -1 && this.state.searchData !== "" ? `<td><span class="matched">${c}</span></td>`: `<td>${c}</td>`
                    }).join("")}</tr>`).join("")
                }
            </tbody>
            </table>
        `;
    }
    this.render();
}