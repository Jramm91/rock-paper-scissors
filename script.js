// console.log("Welcome to Rock-Paper-Scissors! Good luck!");

   

// let playerSelection;
// let compSelection;
// let playerScore = 0;
// let compScore = 0;



// function playerPrompt() {
//     let playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'.");
//     playerChoice = playerChoice.toLowerCase();
//     while((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
//         alert("You can only choose 'rock', 'paper' or 'scissors', please try again!");
//         playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'.");
//     }
//     return playerChoice;
// }

// // // Computer's random choice between rock, papper, and scissors
// function computerPlay() {
//     options = ["rock", "paper", "scissors"]
//     compChoice = options[Math.floor(Math.random() * 3)];
//     return compChoice;
// }

// // Players input of either rock, papper and scissors and plays against computer
// document.getElementById("btn").addEventListener('click', playerSelection);
// function playRound(playerSelection, compSelection){

//     playerSelection = playerPrompt();
//     compSelection = computerPlay();

//     if ( (playerSelection === "rock" && compSelection === "scissors") ||
//     (playerSelection === "paper" && compSelection === "rock") ||
//     (playerSelection === "scissors" && compSelection === "paper") ) {
//         result = `Well done, ${playerSelection} beat ${compSelection}. You win!`;
//         playerScore++;
//     } else if ( (playerSelection === "rock" && compSelection === "paper") ||
//     (playerSelection === "paper" && compSelection === "scissors") ||
//     (playerSelection === "scissors" && compSelection === "rock") ) {
//         result = `Sorry, ${compSelection} beats ${playerSelection}. You lose!`;
//         compScore++
//     } else if ( (playerSelection === "rock" && compSelection === "rock") ||
//     (playerSelection === "paper" && compSelection === "paper") ||
//     (playerSelection === "scissors" && compSelection === "scissors") ) {
//         result = `You both chose ${playerSelection}. It's a draw!`;
//     }

//     return result;
// }

// // make new function called game() and call playRound() inside this function to play a 5 round game that keeps score and reports the winner or loser at the end

// function game() {
//     for (let i = 0; (playerScore + compScore) < 5; i++) {
//         console.log(playRound(playerSelection, compSelection));
//         console.log(`The current score is: Player - ${playerScore} / Computer - ${compScore}.`);
//     }
//     let winner = (playerScore > compScore) ? (`You win, ${playerScore} to ${compScore}.`):
//     (`You lose, ${playerScore} to ${compScore}.`);
//     console.log(winner);

// }


// game();
// console.log("Game Over! Thanks for playing!");

const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');

var img = document.createElement('img');

const SELECTIONS = [
    {
        name: 'rock',
        emoji: 'Rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: 'Paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: 'Scissors',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);

}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner');
    finalColumn.after(div);

}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}
