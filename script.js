// // console.log("Welcome to Rock-Paper-Scissors! Good luck!");

   

let playerSelection;
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('.result');





// function playerPrompt() {
    // let playerChoice;
    // playerChoice = playerChoice.toLowerCase();
    // while((playerChoice != "rock") && (playerChoice != "paper") && (playerChoice != "scissors")) {
        // alert("You can only choose 'rock', 'paper' or 'scissors', please try again!");
        // playerChoice = prompt("Make your choice: 'rock', 'paper', or 'scissors'.");
    // }
    // return playerChoice;
// }

// // // // Computer's random choice between rock, papper, and scissors
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// // // Players input of either rock, papper and scissors and plays against computer

const playRound = (playerSelection, computerSelection) => {

  if (playerSelection === computerSelection) {
    const p = document.createElement('p');
    p.innerText = `You tied! You both picked ${playerSelection}`
    resultDiv.appendChild(p);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    const p = document.createElement('p');
    p.innerText = 'You lost! Rock breaks scissors';
    resultDiv.appendChild(p);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    const p = document.createElement('p');
    p.innerText = 'You won! Scissors cuts paper';
    resultDiv.appendChild(p);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    const p = document.createElement('p');
    p.innerText = 'You won! Paper covers rock';
    resultDiv.appendChild(p);
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    const p = document.createElement('p');
    p.innerText = 'You lost! Scissors cuts paper';
    resultDiv.appendChild(p);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    const p = document.createElement('p');
    p.innerText = 'You won! Rock breaks scissors';
    resultDiv.appendChild(p);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    const p = document.createElement('p');
    p.innerText = 'You lost! Paper covers rock';
    resultDiv.appendChild(p);
  }  
  console.log(playerSelection, computerSelection);
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});


// // // make new function called game() and call playRound() inside this function to play a 5 round game that keeps score and reports the winner or loser at the end

// // function game() {
// //     for (let i = 0; (playerScore + computerScore) < 5; i++) {
// //         console.log(playRound(playerSelection, computerSelection));
// //         console.log(`The current score is: Player - ${playerScore} / Computer - ${computerScore}.`);
// //     }
// //     let winner = (playerScore > computerScore) ? (`You win, ${playerScore} to ${computerScore}.`):
// //     (`You lose, ${playerScore} to ${computerScore}.`);
// //     console.log(winner);

// // }


// // game();
// // console.log("Game Over! Thanks for playing!");

// const selectionButtons = document.querySelectorAll('[data-selection]');
// const finalColumn = document.querySelector('[data-final-column]');
// const computerScoreSpan = document.querySelector('[data-computer-score]');
// const yourScoreSpan = document.querySelector('[data-your-score]');

// var img = document.createElement('img');

// const SELECTIONS = [
//     {
//         name: 'rock',
//         emoji: 'Rock',
//         beats: 'scissors'
//     },
//     {
//         name: 'paper',
//         emoji: 'Paper',
//         beats: 'rock'
//     },
//     {
//         name: 'scissors',
//         emoji: 'Scissors',
//         beats: 'paper'
//     }
// ]

// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener('click', e => {
//         const selectionName = selectionButton.dataset.selection;
//         const selection = SELECTIONS.find(selection => selection.name === selectionName);
//         makeSelection(selection);
//     });
// });

// function makeSelection(selection) {
//     const computerSelection = randomSelection();
//     const yourWinner = isWinner(selection, computerSelection);
//     const computerWinner = isWinner(computerSelection, selection);
    
//     addSelectionResult(computerSelection, computerWinner);
//     addSelectionResult(selection, yourWinner);

//     if (yourWinner) incrementScore(yourScoreSpan);
//     if (computerWinner) incrementScore(computerScoreSpan);

// }

// function incrementScore(scoreSpan) {
//     scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
// }

// function addSelectionResult(selection, winner) {
//     const div = document.createElement('div');
//     div.innerText = selection.emoji;
//     div.classList.add('result-selection');
//     if (winner) div.classList.add('winner');
//     finalColumn.after(div);

// }

// function isWinner(selection, opponentSelection) {
//     return selection.beats === opponentSelection.name
// }

// function randomSelection() {
//     const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
//     return SELECTIONS[randomIndex];
// }
