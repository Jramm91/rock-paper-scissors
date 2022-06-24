console.log("Welcome to Rock-Paper-Scissors! Good luck!");

   

let playerSelection;
let compSelection;
let playerScore = 0;
let compScore = 0;

function playerPrompt() {
    let playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'.");
    playerChoice = playerChoice.toLowerCase();
    while((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        alert("You can only choose 'rock', 'paper' or 'scissors', please try again!");
        playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'.");
    }
    return playerChoice;
}

// // Computer's random choice between rock, papper, and scissors
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
}

// Players input of either rock, papper and scissors and plays against computer
function playRound(playerSelection, compSelection){

    playerSelection = playerPrompt();
    compSelection = computerPlay();

    if ( (playerSelection === "rock" && compSelection === "scissors") ||
    (playerSelection === "paper" && compSelection === "rock") ||
    (playerSelection === "scissors" && compSelection === "paper") ) {
        result = `Well done, ${playerSelection} beat ${compSelection}. You win!`;
        playerScore++;
    } else if ( (playerSelection === "rock" && compSelection === "paper") ||
    (playerSelection === "paper" && compSelection === "scissors") ||
    (playerSelection === "scissors" && compSelection === "rock") ) {
        result = `Sorry, ${compSelection} beats ${playerSelection}. You lose!`;
        compScore++
    } else if ( (playerSelection === "rock" && compSelection === "rock") ||
    (playerSelection === "paper" && compSelection === "paper") ||
    (playerSelection === "scissors" && compSelection === "scissors") ) {
        result = `You both chose ${playerSelection}. It's a draw!`;
    }

    return result;
}

// make new function called game() and call playRound() inside this function to play a 5 round game that keeps score and reports the winner or loser at the end

function game() {
    for (let i = 0; (playerScore + compScore) < 5; i++) {
        console.log(playRound(playerSelection, compSelection));
        console.log(`The current score is: Player - ${playerScore} / Computer - ${compScore}.`);
    }
    let winner = (playerScore > compScore) ? (`You win, ${playerScore} to ${compScore}.`):
    (`You lose, ${playerScore} to ${compScore}.`);
    console.log(winner);

}

game();
console.log("Game Over! Thanks for playing!");