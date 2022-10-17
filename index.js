let winner;
const startGameBtn = document.querySelector('.new-game__btn');
const startGameWindow = document.querySelector('.new-game');
const gameWindow = document.querySelector('.game');
const weaponButtons = document.querySelectorAll('.weapon');
const displayPlayerChoice = document.querySelector('.player__choice');
const displayComputerChoice = document.querySelector('.computer__choice');
const displayRoundResult = document.querySelector('.round-result');
let playerSelection;
let computerSelection;

startGameBtn.addEventListener('click', () => {
  startGameWindow.classList.add('hide');
  gameWindow.classList.remove('hide');
});

function getComputerChoice() {
  const option = ['Paper', 'Scissors', 'Rock'];
  const randomIndex = Math.floor(Math.random() * 3);
  displayComputerChoice.textContent = option[randomIndex];
  computerSelection = displayComputerChoice.textContent;
  return computerSelection;
}

weaponButtons.forEach((weaponButton) =>
  weaponButton.addEventListener('click', playRound)
);

// function for one round
function playRound(playerSelection) {
  getComputerChoice();
  displayPlayerChoice.textContent = playerSelection.target.value;
  playerSelection = displayPlayerChoice.textContent;
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    displayRoundResult.textContent = 'You lose, scissors beats paper';
    winner = 'Computer';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    displayRoundResult.textContent = 'You win, paper beats rock';
    winner = 'Player';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    displayRoundResult.textContent = 'You win, scissors beats paper';
    winner = 'Player';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    displayRoundResult.textContent = 'You lose, rock beats scissors';
    winner = 'Computer';
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    displayRoundResult.textContent = 'You lose, paper beats rock';
    winner = 'Computer';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    displayRoundResult.textContent = 'You win, rock beats scissors';
    winner = 'Player';
  } else {
    displayRoundResult.textContent = `Tie, you both choose ${playerSelection}`;
  }
  return winner;
}

//function for the game with score track and winner declaration
// function game(times) {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < times; i++) {
//     const playerSelection = getUserChoice();
//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//     if (winner === 'Player') {
//       playerScore++;
//     } else if (winner === 'Computer') {
//       computerScore++;
//     }
//   }
//   console.log(
//     `Your score is ${playerScore} and computer score is ${computerScore}`
//   );
//   return playerScore > computerScore
//     ? 'Player is a Winner'
//     : 'Computer is a Winner';
// }

//console.log(game(3));
