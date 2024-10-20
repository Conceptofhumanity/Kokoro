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
}

function gameEnd() {
    alert("you lose bozo idiot loser")
    gameOver = true;
    cells.forEach(cell => {
        if (cell.classList.contains('mine')) {
            cell.classList.add("exploded")
        }
    });
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
