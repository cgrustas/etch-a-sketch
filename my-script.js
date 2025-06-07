const GRID_SIZE = 16;
const GRID_LENGTH = 960; // in pixels
const container = document.querySelector("#container");

for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < GRID_SIZE; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = "lightblue";
        });
        row.appendChild(cell);
    }
}
console.log(container);

