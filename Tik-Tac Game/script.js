const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector("#info-user")
const newGameBtn = document.querySelector("#btn")

let currentPlayer;
let gameGrid;


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

function startGame() {
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        boxes[index].style.pointerEvents = "all"
        box.classList = `box box${index+1}`;
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
    let answer = "";


    winningPosition.forEach((position) => {
        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "")
        &&(gameGrid[position[0]] === gameGrid[position[1]])  && (gameGrid[position[1]] === gameGrid[position[2]])) {
    
            if(gameGrid[position[0]] == "X")

                answer = "X"

                else
                answer = "O"

                boxes.forEach((box) => {
                    box.style.pointerEvents = "none"
                })

            boxes[position[0]].classList.add("winner")
            boxes[position[1]].classList.add("winner")
            boxes[position[2]].classList.add("winner")
        }
    });

    if(answer !== ""){
        gameInfo.innerHTML = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active")
    }


    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
        fillCount++
    });

    if(fillCount === 9) {
        gameInfo.innerHTML = "Game Tie !"
        newGameBtn.classList.add("active")
    }
}