const grid = document.querySelector('.grid');
const size = 5;  
const maxmines = 15; 
const basemines = 5;
const cells = []; 

function createGrid() {
    
    for (let i = 0; i < width * width; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;
        cell.addEventListener('click', cellClicked);
        grid.appendChild(cell);
        cells.push(cell);
    
    let mineCount = 0
    const numberofmines = Math.floor(Math.random() * (maxmines - basemines + 1)) + basemines

    while(mineCount < numberofmines) {
        if(Math.random() < .2 && !cells[i].classList.contains("mine")) {
        cells[i].classList.add("mine");
        mineCount++;
            if(mineCount >= maxmines) break;

        }
    }     
 }
}

/*function placeMines() {
    let mineCount = 0
    while (mineCount < mines) {
        const randomIndex = Math.floor(Math.random() * cells.length);
        if (!Cells[randomIndex].classList.contains('mine')) {
            cells[randomIndex].classList.add('mine')
            mineCount++;
        }
    }
}
*/
    
function cellClicked() {
    if(this.classList.contains('mine')) {
        alert('BOOOM. haha. nice. hit a bomb.');
        return;
    } else {
        this.classList.add('revealed');
   checkWin();
    }
}

function checkWin() {
    const revealedCells = document.querySelectorAll('.revealed').length
    if (revealedCells === (width * width - numberofmines)) {
        Win();
    alert("you win. the button is in the bottom left corner");

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
        
createGrid();
