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

// Main function
function main() {
    
    console.log("Computer's choice: " + getComputerChoice());
    console.log("Player's choice: " + getPlayerChoice());
}


main();