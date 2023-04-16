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

function playRound(computerSelection, playerSelection) {

    // Check for draw
    if (playerSelection === computerSelection) {
        return "Draw!";

    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "Player wins! Rock beats Scissors.";
        }
        else {
            return "Computer wins! Paper beats Rock.";
        }

    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "Player wins! Paper beats Rock.";

        }
        else {
            return "Computer wins! Scissors beats Paper.";
        }
    }
    else {
        if (computerSelection === "paper") {
            return "Player wins! Scissors beats Paper.";

        }
        else {
            return "Computer wins! Rock beats Scissors.";
        }
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

        /* if(result.charAt(0) === 'P') {
            playerScore++;
        }
        else if(result.charAt(0) === 'C'){
            computerScore++;
        }
        else {
            continue;
        } */

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
    
    playGame();

}


main();