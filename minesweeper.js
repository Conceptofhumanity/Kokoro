const grid = document.querySelector('.grid');
const size = 10;  
const maxmines = 25; 
const basemines = 10;
const cells = []; 
let gameOver = false
const numberofmines = Math.floor(Math.random() * (maxmines - basemines + 1)) + basemines;

function placeMines() {
    let mineCount = 0
    while (mineCount < numberofmines) {
        const randomIndex = Math.floor(Math.random() * cells.length);
        if (!cells[randomIndex].classList.contains('mine')) {
            cells[randomIndex].classList.add('mine')
            mineCount++;
        }
    }
}

function createGrid() {
    let mineCount = 0
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;
        cell.addEventListener('click', cellClicked);
        grid.appendChild(cell);
       cells.push(cell);
  
    }
placeMines();
minesNearby();
}

function gameEnd() {
    gameOver = true;
    cells.forEach(cell => {
        if (cell.classList.contains('mine')) {
            cell.classList.add("exploded")
        }
    });
}

function printNearbyMines() {
    for (let i= 0; i < size * size; i++) {
        if (cells[i].classList.contains('mine')) continue;
        const nearbyMines = getNeighboringMines(i);
        if (nearbyMines > 0) {
            cells[i].textContent = nearbyMines;  
        }
    }
}

function getNeighboringMines(index) {
    const neighbors = getNeighbors(index);
    let nearbyMines = 0;

    neighbors.forEach(neighborIndex => {
        if (cells[neighborIndex] && cells[neighborIndex].classList.contains('mine')) {
            nearbyMines++; /* if cell is a neighbor, and is a mine, increase nearbyMines by 1 */
        }
    });

    return nearbyMines
}


function getNeighbors(index) {
    const neighbors = [];
    const row = Math.floor(index / size);
    const col = index % size;

    const positions = [
        [-1, -1], [-1,0], [-1,1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]  
    ];
    positions.forEach(([rowOffset, colOffset]) => {
        const newRow = row + rowOffset;
        const newCol = col + colOffset;

        if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
            neighbors.push(newRow * size + newCol);
        }
    });
    return neighbors;
}


function cellClicked() {
    if (gameOver) return;


    
    if(this.classList.contains('mine')) {
        this.classList.add('exploded')
       alert("IVE BEEN CLICKED OH NO EGAD MAN WHAT HAVE YOU DONE");
        gameEnd()
    } else {
        this.classList.add('revealed');
        printNearbyMines();
        checkWin();
    }
}

function checkWin() {
    const revealedCells = document.querySelectorAll('.revealed').length;
    if (revealedCells === (size * size - numberofmines)) {
        Win();
        alert("you win. the button is in the bottom left corner");
    }
}
        
function Win() {
    const button = document.createElement("button");
    button.textContent = "you win. you may go on.";
    button.addEventListener("click", () => { 
        button.textContent ="one second..."
        setTimeout(() => {
            window.location.href = "page2.html";
        }, 500);
    });
    document.body.appendChild(button);
}
createGrid();
