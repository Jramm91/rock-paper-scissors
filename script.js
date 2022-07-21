let playerSelection;
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("your-score");
const computerScore_span = document.getElementById("comp-score");
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('.result');
const p = document.createElement('p');
const optionButtons_button = document.querySelectorAll('.btn');

// // // // Computer's random choice between rock, papper, and scissors
function computerPlay() {
    options = ["rock", "paper", "scissors"]
    computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// // // Players input of either rock, papper and scissors and plays against computer

const playRound = (playerSelection, computerSelection) => {

  if (playerSelection === computerSelection) {
    p.innerHTML = `You tied! You both picked ${playerSelection}`
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    p.innerHTML = 'You lost! Rock breaks scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    p.innerHTML = 'You won! Scissors cuts paper';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    p.innerHTML = 'You won! Paper covers rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    p.innerHTML = 'You lost! Scissors cuts paper';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    p.innerHTML = 'You won! Rock breaks scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    p.innerHTML = 'You lost! Paper covers rock';
  }  
  resultDiv.appendChild(p);
}

const checkForWinner = (playerScore, computerScore) => {
  const h2 = document.createElement('h2');
  const resetP = document.createElement('p');

  if (playerScore === 5) {
    resultDiv.removeChild(p);
    h2.classList.add('player-won');
    h2.innerText = `You won! ${playerScore} to ${computerScore}. Congratulations!`;
    resetP.innerText = 'Please refresh page to play again.';
  } else if (computerScore === 5) {
    resultDiv.removeChild(p);
    h2.classList.add('computer-won');
    h2.innerText = `You lose! ${computerScore} to ${playerScore}. Better luck next time.`;
    resetP.innerText = 'Please refresh page to play again.';
  }
  resultDiv.appendChild(h2);  
  resultDiv.appendChild(resetP);
}

const incrementScore = (playerScore, computerScore) => {
  playerScore_span.innerText = `${playerScore}`;
  computerScore_span.innerText = `${computerScore}`;

}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    incrementScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    incrementScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    incrementScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
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
//     scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
// }

// function addSelectionResult(selection, winner) {
//     const div = document.createElement('div');
//     div.innerHTML = selection.emoji;
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
