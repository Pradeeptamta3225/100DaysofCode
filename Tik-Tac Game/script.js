const boxes = document.querySelectorAll(".box");
const userInfo = document.querySelector("#info-user")
const newGameBtn = document.querySelector("#btn")

let currentPlayer;
let gridInfo;


const winningPosition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]

function startGame(){
    currentPlayer = "X";
    gridInfo = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    userInfo.innerHTML = `Current Player - ${currentPlayer}`;
}


startGame();