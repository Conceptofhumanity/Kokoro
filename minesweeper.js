const grid = document.querySelector('.grid');
const size = 5;  
const mines = 10; 
const cells = []; 

function createGrid() {
    for i = 0; i < width * width; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;
        cell.addEventListener('click', cellClicked());
        grid.appendChild.(cell)
        cells.push.cell;


        let mineCount = 0
        if(mineCount > mines) {
            try(Math.random() < .2) {
            cells.classList.add("mine");
            mineCount++;
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
    if revealed cells === (width * width - mines) {
        Win();
    alert("you win. the button is in the bottom left corner");

function Win() {
    const button = document.createElement("button");
    button.textContent = "you win. you may go on.";
    button.addEventListener("click", window.location.href("page2.html")
    document.body.appendChild("button");
        
createGrid();
