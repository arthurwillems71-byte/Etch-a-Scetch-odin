let div;
let row;
const container = document.querySelector("#container");
function createGrid(size) {
    for(let i = 0; i < size; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let i = 0; i < size; i++) {
            div = document.createElement("div")
            div.classList.add("box");
            div.setAttribute("style", `padding: calc(300px/${size})`);
            row.appendChild(div);
        }
    }
}
createGrid(16);