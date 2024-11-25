/* DONT LOOK AT MY BAD CODE AVERT YOUR EYES */  

const grid = document.querySelector('.grid');  /*grid is the div with the class grid*/
const size = 10; 
const maxmines = 25; 
const basemines = 15; 
const cells = [];  /*Creates an array to store the cells*/
let gameOver = false 
const numberofmines = Math.floor(Math.random() * (maxmines - basemines + 1)) + basemines; /*the number of mines is a random number between maxmines and basemines*/
let firstClick = false 

function placeMines2(safeZone) { /*places the mines around a 9x9 area around the first click*/
    let mineCount = 0 
    while (mineCount < numberofmines) {
        const randomIndex = Math.floor(Math.random() * cells.length); /*random number between 0 and the number of cells*/
        if (!cells[randomIndex].classList.contains('mine') && !safeZone.includes(randomIndex)) { /*if the cell doesn't have the "mine" class and isn't in the safe zone, make it a mine*/
            cells[randomIndex].classList.add('mine');
            mineCount++
    }
}
}

function createGrid() { /*creates the grid*/
    for (let i = 0; i < size * size; i++) { /*for each cell in the grid*/
        const cell = document.createElement('div'); /*create a div*/
        cell.classList.add('cell'); /*add the class cell to the div*/
        cell.dataset.id = i; /*add the id of the cell to the div*/
        cell.addEventListener('click', () => cellClicked(i));  /*add an event listener to the div that runs cellClicked with the id of the cell as the argument*/
        cell.addEventListener('contextmenu', (event) => { /*add an event listener to the div that runs cellFlagged with the id of the cell as the argument*/
            event.preventDefault();
            cellFlagged(i);
        });
        grid.appendChild(cell); /*add the div to the grid*/
       cells.push(cell); /*add the div to the cells array*/
      
    }
}

function minesOnClick(safeZone) { /*places mines upon first click*/
    if (cells.some(cells => cells.classList.contains('mine'))) { /*stops the function from placing mines every click */
        return;
    } else {
        placeMines2(safeZone) 
    }
}


function gameEnd() { /*ends the game*/
    gameOver = true;
    cells.forEach(cell => {
        if (cell.classList.contains('mine')) { /*makes mines "exploded"*/
            cell.classList.add("exploded")
        }
        if (cell.classList.contains('flagged') && !cell.classList.contains('mine')) { /*removes flagged class from cells that aren't mines*/
            cell.classList.remove('flagged');
        }
    });
}

function revealNearby(i) { 
    if(cells[i].classList.contains("mine")) return; /*stops the function from revealing mines*/
    const nearbyMines = getNeighboringMines(i) /*gets the number of mines around the cell*/
    

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


function cellClicked(i) {
    console.log("hehe why are you in the log");
    if (gameOver) return;

    

    if (!firstClick) {
        const safeZone = [i, ...getNeighbors(i)];
        minesOnClick(safeZone);
        firstClick = true
    }
    
    if(cells[i].classList.contains('mine')) {
        cells[i].classList.add('exploded');
        alert("IVE BEEN CLICKED OH NO EGAD MAN WHAT HAVE YOU DONE");
        gameEnd();
    } else {
        cells[i].classList.add('revealed');
       revealNearby(i);
        /*printNearbyMines();*/
        checkWin();
    }
}

function cellFlagged(i) {
    console.log("hehe why are you in the log")
    if (gameOver) return
    cells[i].classList.toggle('flagged'); 
}

function checkWin() {
    if (gameOver) return;
    const revealedCells = document.querySelectorAll('.revealed').length;
    if (revealedCells === (size * size - numberofmines)) {
        Win();
    }
}
        
function Win() {
    gameOver = true;
    alert('okay, nice job. the password is "iamacatperson", no spaces, no caps. ')
}
createGrid();
