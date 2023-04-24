// Global vars
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

function playRound() {

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

    // Updates game result data content depending on the result
    if (playerSelection === computerSelection) {
        gameResultsData.textContent = "Draw!";

    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            gameResultsData.textContent = "Player wins! Rock beats Scissors.";
        }
        else {
            computerScore++;
            return "Computer wins! Paper beats Rock.";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            gameResultsData.textContent = "Player wins! Paper beats Rock.";

        }
        else {
            computerScore++;
            gameResultsData.textContent = "Computer wins! Scissors beats Paper.";
        }
    }
    else {
        if (computerSelection === "paper") {
            playerScore++;
            gameResultsData.textContent = "Player wins! Scissors beats Paper.";

        }
        else {
            computerScore++;
            gameResultsData.textContent = "Computer wins! Rock beats Scissors.";
        }
    }



    // Update Data on the DOM
    roundNumberPara.textContent = `Round #: ${roundNumber + 1} / 5`;
    playerScorePara.textContent = "Player Score: " + playerScore;
    computerScorePara.textContent = "Computer Score: " + computerScore;


    // Add gameResultsData to the DOM
    gameResultsDiv.appendChild(gameResultsData);

    // Update round data
    roundNumber++;

    // Check for winner if round 5
    if(roundNumber == 5) {
        gameOver(roundNumber);
    }
}

function gameOver(roundNumber) {
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

function playGame() {

    let result = "";
    let playerScore = 0;
    let computerScore = 0; // This value is just the complement of playerScore, so a var is not needed (computerScore = numRounds - playerScore), we could just compute the value
    let numRounds = 5;

    for(let i = 0; i < numRounds; i++){

        console.log("Round #" + (i+1));

        let playerChoice = getPlayerChoice();
        console.log("Player's choice: " + playerChoice);

        let computerChoice = getComputerChoice();
        console.log("Computer's choice: " + computerChoice);
    
        result = playRound(computerChoice, playerChoice);

        console.log(result);

        switch(result.charAt(0)) {
            case 'P':
                playerScore++;
                break;
            case 'C':
                computerScore++;
                break;
        }

        console.log("-------------------------------------");
    }

    if(playerScore > computerScore) {
        console.log("Player wins the series with a score of " + playerScore + " - " + computerScore);
    }

    else if(playerScore < computerScore) {
        console.log("Computer wins the series! with a score of " + computerScore + " - " + playerScore);
    }

    else {
        console.log("Draw. Both the player and the computer finsihed with a score of " + playerScore + " - " + computerScore);
    }

    console.log("Refresh the page to play again.");
    
}

// Main function
function main() {
    
    //playGame();

    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
}

main();