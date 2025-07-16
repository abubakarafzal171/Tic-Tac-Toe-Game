let board = document.querySelector("#board");
let cells = document.querySelectorAll(".cell");
let text = document.getElementById("text");
let reset = document.querySelector("#reset");
let turn = document.querySelector("#turn");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
// checking and entering value based on condition wether it is X or Y
let initialTurn = "X";
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (initialTurn === "X") {
      cell.innerText = "X";
      initialTurn = "O";
    } else {
      cell.innerText = "O";
      initialTurn = "X";
    }
    if (initialTurn === "X") {
      turn.innerHTML = "Current Turn: <span>X</span>";
    } else {
      turn.innerHTML = "Current Turn: <span>O</span>";
    }
     audioTurn.play();
    cell.disabled = true;
    checkWin();
    // disableCells();
  });
});

// Reset The Game
reset.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false;
  });
});


// disable cells
const disableCells = ()=>{
for(let cell of cells){
  cell.disabled = true;
}
}

// current turn button logic
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (initialTurn === "X") {
      turn.innerHTML = "Current Turn: <span>X</span>";
    } else {
      turn.innerHTML = "Current Turn: <span>O</span>";
    }
  });
});

// Giving Number to Each Cell for Winning Patterns

const checkWin = ()=>{
    let cell = document.getElementsByClassName('cell');
    let wins = [
        [0, 1, 2,],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((cell[e[0]].innerText === cell[e[1]].innerText) && (cell[e[2]].innerText === cell[e[1]].innerText) && (cell[e[0]].innerText !== "") ){
           let winner = cell[e[0]].innerText ;
          text.innerHTML =  `Winner is <span>${winner}</span>`
          gameover.play();
              disableCells();
        }
    })
}




