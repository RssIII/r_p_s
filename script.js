function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerChoice, computerChoice) {
    let playerSelection = prompt("Choose either rock, paper, or scissors: ");
    let computerSelection = computerPlay();

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return "You lost! Scissors cuts paper!";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
        return "It's a tie!";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return "It's a tie!";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return "You win! Paper covers rock!";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return "You lost, rock crushes scissors!";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return "You lose, paper covers rock!";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return "It's a tie";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        return "You win! Scissors cuts paper";
    }
}

function game() {
    for(i = 0; i <= 5; i++) {
        console.log(playRound());
    }
}