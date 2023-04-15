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

// Main function
function main() {
    
    console.log(getComputerChoice());
}

main();