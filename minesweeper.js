const grid = document.querySelector('.grid');
const size = 5;  
const mines = 5; 
const cells = []; 

function createGrid() {
    for i = 0; i < width * width; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;
        cell.addEventListener('click', revealCell);
        grid.appendChild.(cell)
        cells.push.cell;
    }
    placeMines()
}

function placeMines() {
    let mineCount = 0
    while (mineCount < mines) {
        const randomIndex = Math.floor(Math.random() * cells.length);
        if (!Cells[randomIndex].classList.contains('mine')) {
            cells[randomIndex].classList.add('mine')
            mineCount++;
        }
    }
}

function revealCell() {
    if(this.classList.contains('mine')) {
        alert('BOOOM. haha. nice. hit a bomb.');
    } else {
        this.classList.add('revealed');
    }
}

function win() {
    cells.classList.removeAll
    alert("you win.")

createGrid();
