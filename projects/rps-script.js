

function getComputerChoice() {
    let choices = {1: "rock", 2: "paper", 3: "scissors"};
    return choices[Math.floor(Math.random() * 3) + 1]
}

function checkWinner() {
    if (playerScore === 5) {
        while (selectionDiv.firstChild) {
            selectionDiv.removeChild(selectionDiv.firstChild)
        }

        selectionDiv.textContent = "You Win!"

    } else if (computerScore === 5) {
        while (selectionDiv.firstChild) {
            selectionDiv.removeChild(selectionDiv.firstChild)
        }

        selectionDiv.textContent = "You Lose!"
    }

}

function updateScore() {
    scoreDiv.textContent = `Player Score: ${playerScore.toString()} vs. COMP Score: ${computerScore.toString()}`
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let choices = {"rock": 1, "paper": 2, "scissors": 3};
    let plyr = choices[playerSelection.toLowerCase()];
    let cmp = choices[computerSelection.toLowerCase()];
    if (plyr == cmp) {
        return `Tie game. Your ${playerSelection} matches the computer's ${computerSelection}!`
    } else if ((plyr + 1) % 3 == (cmp % 3)) {
        computerScore++
        updateScore()
        checkWinner()
        return `You lose this round! Your ${playerSelection} is beaten by the computer's ${computerSelection}!`;
    } else {
        playerScore++
        updateScore()
        checkWinner()
        return `You win this round! Your ${playerSelection} beats the computer's ${computerSelection}!`
    }
}
/*
for (let i = 0; i <5; i++) {
    while (true) {
        var playerSelection = window.prompt("Rock, paper or scissors?");
        if (validAnswer.includes(playerSelection.toLowerCase())) {
            break;
        }
    }
    const computerSelection = getComputerChoice();
    const displayResult = (playRound(playerSelection, computerSelection))
}
console.log(`Final Score. YOU: ${playerScore.toString()}. COMP: ${computerScore.toString()}.`)
*/

const rockBtn = document.createElement("button");
rockBtn.textContent = "ROCK";
const paperBtn = document.createElement("button");
paperBtn.textContent = "PAPER";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "SCISSORS";

const gameDiv = document.getElementById("js-here");

const selectionDiv = document.createElement('div');
selectionDiv.classList = 'select'
selectionDiv.appendChild(rockBtn);
selectionDiv.appendChild(paperBtn);
selectionDiv.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => resultsDiv.textContent = playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click", () => resultsDiv.textContent = playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click", () => resultsDiv.textContent = playRound("scissors",getComputerChoice()));

const directions = document.createElement("span")
directions.textContent = "Choose Wisely!"
const resultsDiv = document.createElement("div");
const scoreDiv = document.createElement("div")
scoreDiv.textContent = `Player Score: ${playerScore.toString()} vs. COMP Score: ${computerScore.toString()}`

gameDiv.appendChild(directions);
gameDiv.appendChild(selectionDiv);
gameDiv.appendChild(resultsDiv);
gameDiv.appendChild(scoreDiv);

