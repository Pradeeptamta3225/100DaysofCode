const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector("#info-user")
const newGameBtn = document.querySelector("#btn")

let currentPlayer;
let gameGrid;


const winningPattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]

function startGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        boxes[index].style.pointerEvents = "all"
        });
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;

}

startGame();


function swapPlayer() {
    if(currentPlayer === "X"){
        currentPlayer = "O"
    }

    else{
        currentPlayer = "X"
    }

    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
}

function handleClick(index) {
    if(gameGrid[index] === "") {
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none"

        swapPlayer();

        checkGameEnd();
    }
}



boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", startGame)


function checkGameEnd(){
    
}