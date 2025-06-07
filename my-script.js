createGrid();
resetGrid();

// Creates a "<squares> by <squares>" grid
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
    addTrail();
}

// Adds a "hover" effect to each cell so that the grid divs change color 
// when your mouse passes over them, leaving a "pixelated" trail 
function addTrail() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "blue";
        });
    });
}

// Resets grid when button is clicked. The new squares per side is determined 
// by user input, but the grid takes up the same total space as before.
function resetGrid() {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        let squares = prompt("How many squares per side?");
        if (squares < 1 || squares > 100) {
            alert("Squares must be a number between 1 and 100");
        }
        removeGrid(); 
        createGrid(squares);
    });
}

// Removes all elements within the existing grid
function removeGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => row.remove());
}