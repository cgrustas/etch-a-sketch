
createGrid();
addTrail();

// creates an "<squares> by <squares>" grid
function createGrid(squares = 16) {
    const GRID_LENGTH = 960; // pixels
    const container = document.querySelector("#grid");
    for (let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < squares; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
}

// adds a "hover" effect to each cell so that the grid divs change color 
// when your mouse passes over them, leaving a "pixelated" trail 
function addTrail() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "lightblue";
        });
    });
}

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     const squares = prompt("How many squares per side?");
    
// });