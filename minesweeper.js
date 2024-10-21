const grid = document.querySelector('.grid');
const size = 10;  
const maxmines = 25; 
const basemines = 10;
const cells = []; 

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
        else {
            cell.classList.add('revealed')
        }
    });
}

function printNearbyMines() {
    for (let i= 0; i < size * size; i++) {
        if (cells[i].classList.contains('mine')) continue;
        const nearbyMines = getNeighboringMines(i);
        if (nearbyMines > 0) {
            cells[i].textContent = mineCount;  
        }
    }
}

function getNeighboringMines(index) {
    const neighbors = getNeightbors(index);
    let nearbyMines = 0;

    meightbors.forEach(neightborIndex => {
        if (cells[neighborIndex] && cells[neightborIndex].classClist.contains('mine')) {
            mineCount++;
        }
    });

    return nearbyMines
}


function getNeighbors(index) {
    const neightbors = [];
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

        if (newRow >= 0 && newRow < size && newCOl >= 0 && newCol < size) {
            neightbbors.push(newRow * size +newCol);
        }
    });
    return neightbors;
}


function cellClicked() {
    if (gameOver) return
    
    if(this.classList.contains('mine')) {
        this.classList.add('exploded')
       alert("IVE BEEN CLICKED OH NO EGAD MAN WHAT HAVE YOU DONE");
        gameEnd()
    } else {
        this.classList.add('revealed');
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
