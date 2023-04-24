// Global vars -- Wasnt quite sure how to pass var's into JS with HTML onclick 
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// Functions for gameplay
function getComputerChoice() {
    let choice;

    choice = Math.floor(Math.random() * 3);

    if(choice === 0) {
        return "rock";
    }

    else if(choice === 1) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice = prompt("Enter: Rock, Paper, or Scissors");

    if(choice == null) { return getComputerChoice(); }

    choice = choice.toLowerCase();

    if(choice === "rock") {
        return "rock";
    } 
    
    else if(choice === "paper") {
        return "paper";
    } 
    
    else if(choice === "scissors") {
        return "scissors";
    } 
    
    else {
        alert("Invalid Input. Generating a random choice for you.")

        // Since this function returns a random Rock-Paper-Scissors option, I am resuing the function here
        return getComputerChoice();
    }
    
}

function gameOver(computerScore, playerScore, gameOverMessagePara) {

    // Change outline from beige to black 
    let gameOverDiv = document.querySelector('.game-over');
    gameOverDiv.style.cssText = "outline: 2px solid black;";

    if(playerScore > computerScore) {
        gameOverMessagePara.textContent = `Player Wins with a Score of ${playerScore}!`;
    }
    else if(playerScore < computerScore) {
        gameOverMessagePara.textContent = `Computer Wins with a Score of ${computerScore}!`;
    }
    else {
        gameOverMessagePara.textContent = "It's a Draw!";
    }
    
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;

    
    let gameOverDiv = document.querySelector('.game-over');
    gameOverDiv.style.cssText = "outline: 2px solid beige;";

    let gameResultsDiv = document.querySelector('.game-results');
    gameResultsDiv.innerHTML = '';

    // Gets paragraphs in game-data div & game-over div
    let roundNumberPara = document.querySelector('#round-number');
    roundNumberPara.textContent = '';
    let playerScorePara = document.querySelector('#player-score');
    playerScorePara.textContent = '';
    let computerScorePara = document.querySelector('#computer-score');
    computerScorePara.textContent = '';
    let gameOverMessagePara = document.querySelector('#game-over-message');
    gameOverMessagePara.textContent = '';
}

function playRound() {

    // Check round number, if 5 -> Reset
    if(roundNumber == 5) { resetGame(); }


    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    // Get game-results div & game-over div
    let gameResultsDiv = document.querySelector('.game-results');
    let gameOverDiv = document.querySelector('.game-over');

    // Gets paragraphs in game-data div & game-over div
    let roundNumberPara = document.querySelector('#round-number');
    let playerScorePara = document.querySelector('#player-score');
    let computerScorePara = document.querySelector('#computer-score');

    let gameOverMessagePara = document.querySelector('#game-over-message');

    // Create an element to add game results data to
    let gameResultsData = document.createElement('p');

    gameResultsData.textContent = `Round #${roundNumber+1}: `;
    // Updates game result data content depending on the result
    if (playerSelection === computerSelection) {
        gameResultsData.textContent += "Draw!";

    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            gameResultsData.textContent += "Player wins! Rock beats Scissors.";
        }
        else {
            computerScore++;
            return "Computer wins! Paper beats Rock.";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            gameResultsData.textContent += "Player wins! Paper beats Rock.";

        }
        else {
            computerScore++;
            gameResultsData.textContent += "Computer wins! Scissors beats Paper.";
        }
    }
    else {
        if (computerSelection === "paper") {
            playerScore++;
            gameResultsData.textContent += "Player wins! Scissors beats Paper.";

        }
        else {
            computerScore++;
            gameResultsData.textContent += "Computer wins! Rock beats Scissors.";
        }
    }

    // Update Data on the DOM
    roundNumberPara.textContent = `Round #${roundNumber + 1} / 5`;
    playerScorePara.textContent = "Player Score: " + playerScore;
    computerScorePara.textContent = "Computer Score: " + computerScore;


    // Add gameResultsData to the DOM
    gameResultsDiv.appendChild(gameResultsData);

    // Update round data
    roundNumber++;

    // Check for winner if round 5
    if(roundNumber == 5) {
        gameOver(computerScore, playerScore, gameOverMessagePara);
    }
}

function main() {
    //resetGame();
}

main();