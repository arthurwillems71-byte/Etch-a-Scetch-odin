const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#size");

function createGrid(size) {
    container.replaceChildren();

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.classList.add("box");
            div.setAttribute("style", `padding: calc(300px/${size})`);
            let dark = 0;
            
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = `rgb(${Random(0, 255)}, ${Random(0, 255)}, ${Random(0, 255)})`;
            });

            row.appendChild(div);
        }
    }
}

function newSize() {
    let gridSizeStr = prompt("Set size (1 - 100)", 16);
    if (gridSizeStr === null) return;

    let gridSize = Number(gridSizeStr);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Kies een geldig getal tussen 1 en 100.");
        return;
    }

    createGrid(gridSize);
}
function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

sizeBtn.addEventListener("click", newSize);

createGrid(16);
