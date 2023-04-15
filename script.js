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

function playRound(computerChoice, playerChoice) {

    let playerWon;

    // Draw
    if(computerChoice === playerChoice) {

    }

    // Player chose rock
    if(playerChoice === "rock") {
        if(computerChoice === "paper") {
            playerWon = false;
        }

        // computerChoice === "scissors"
        else {
            playerWon = true;
        }
    }

    // Player chose paper
    else if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            playerWon = true;
        }

        // computerChoice === "scissors"
        else {
            playerWon = false;
        }
    }

    // Player chose scissors
    else {
        if(computerChoice === "rock") {
            playerWon = false;
        }
        // computerChoice === "paper"
        else {
            playerWon = true;
        }
    }

    if(playerWon) {
        console.log("Player won! " + playerChoice + " beats " + computerChoice + ".");
    }
    else {
        console.log("Computer won! " + computerChoice + " beats " + playerChoice + ".");
    }
    
}

// Main function
function main() {
    

    let computerChoice = getComputerChoice();
    console.log("Computer's choice: " + computerChoice);

    let playerChoice = getPlayerChoice();
    console.log("Player's choice: " + playerChoice);

    playRound(computerChoice, playerChoice);
}


main();