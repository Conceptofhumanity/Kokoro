/* DONT LOOK AT MY BAD CODE AVERT YOUR EYES */  

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
        if (!cells[randomIndex].classList.contains('revealedmine')) {
            cells[randomIndex].classList.add('revealedmine')
            mineCount++;
        }
    }
}

function createGrid() {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;
        cell.addEventListener('click', () => cellClicked(i)); 
        grid.appendChild(cell);
       cells.push(cell);
  
    }
placeMines();
}

function gameEnd() {
    gameOver = true;
    cells.forEach(cell => {
        if (cell.classList.contains('revealedmine')) {
            cell.classList.add("exploded")
        }
    });
}

function revealNearby(i) { 
    if(cells[i].classList.contains("revealedmine")) return;
    const nearbyMines = getNeighboringMines(i)
    

    if (nearbyMines > 0) {
        cells[i].textContent = nearbyMines;
        cells[i].classList.add('revealed');
        return;

    } else { 
        }
        cells[i].classList.add('revealed')
        cells[i].textContent = ''

            const neighbors = getNeighbors(i);
            neighbors.forEach(neighborIndex => {
                if (!cells[neighborIndex].classList.contains("revealed"))
                revealNearby(neighborIndex)

            });
     }
    
    
/* function printNearbyMines(i) {
    for (let i= 0; i < size * size; i++) {
        if (cells[i].classList.contains('mine')) continue;
        const nearbyMines = getNeighboringMines(i);
        if (nearbyMines > 0) {
            cells[i].textContent = nearbyMines;  
        }
    }
}
*/ 

function getNeighboringMines(index) {
    const neighbors = getNeighbors(index);
    let nearbyMines = 0;

    neighbors.forEach(neighborIndex => {
        if (cells[neighborIndex] && cells[neighborIndex].classList.contains('revealedmine')) {
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


function cellClicked(i) {
    console.log("hehe why are you in the log")
    if (gameOver) return

    if(cells[i].classList.contains('revealedmine')) {
        cells[i].classList.add('exploded')
        alert('BOOOM. haha. nice. hit a bomb.');
        gameEnd()
    } else {
        cells[i].classList.add('revealed');
       revealNearby(i);
        /*printNearbyMines();*/
        checkWin()
    }
}

function checkWin() {
    if (gameOver) return;
    const revealedCells = document.querySelectorAll('.revealed').length;
    if (revealedCells === (size * size - numberofmines)) {
        Win();
        alert("Good job. You win.");
    }
}
        
function Win() {
    gameOver = true;
    const button = document.createElement("button");
    button.textContent = "You win. You can go back to the main site";
    button.addEventListener("click", () => { 
        button.textContent ="one second..."
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    });
    document.body.appendChild(button);
}
createGrid();