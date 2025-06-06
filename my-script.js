// TODO: Create a 16x16 grid of empty divs within the "container" div
// The "container" div contains 16 "row" divs
// Each "row" div contains 16 "cell" divs
const GRID_SIZE = 16;
const container = document.querySelector("#container");

for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < GRID_SIZE; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
        // TODO: Make each empty div a square div
    }
}
console.log(container);