let winner;
const startGameBtn = document.querySelector('.new-game__btn');
const startGameWindow = document.querySelector('.new-game');
const gameWindow = document.querySelector('.game');
const weaponButtons = document.querySelectorAll('.weapon');
const displayPlayerChoice = document.querySelector('.player__choice');
const displayComputerChoice = document.querySelector('.computer__choice');
const displayRoundResult = document.querySelector('.round-result');
const displayPlayerScore = document.querySelector('.player__score');
const displayComputerScore = document.querySelector('.computer__score');
const displayGameResult = document.querySelector('.result-header');
const resultWindow = document.querySelector('.result');
const playAgain = document.querySelector('.play-again');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

startGameBtn.addEventListener('click', () => {
  startGameWindow.classList.add('hide');
  gameWindow.classList.remove('hide');
});

playAgain.addEventListener('click', () => {
  resultWindow.classList.add('hide');
  gameWindow.classList.remove('hide');
  displayPlayerChoice.textContent = '';
  displayComputerChoice.textContent = '';
  displayRoundResult.textContent = '';
  displayPlayerScore.textContent = '';
  displayComputerScore.textContent = '';
  playerScore = 0;
  computerScore = 0;
});

weaponButtons.forEach((weaponButton) =>
  weaponButton.addEventListener('click', playRound)
);

// function to get computer choice
function getComputerChoice() {
  const option = ['Paper', 'Scissors', 'Rock'];
  const randomIndex = Math.floor(Math.random() * 3);
  displayComputerChoice.textContent = option[randomIndex];
  computerSelection = displayComputerChoice.textContent;
  return computerSelection;
}

//function to display winner
function getWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    displayGameResult.textContent = 'Player is a Winner';
    resultWindow.classList.remove('hide');
    gameWindow.classList.add('hide');
  } else if (computerScore === 5) {
    displayGameResult.textContent = 'Computer is a Winner';
    resultWindow.classList.remove('hide');
    gameWindow.classList.add('hide');
  }
}

// function for one round
function playRound(playerSelection) {
  getComputerChoice();
  displayPlayerChoice.textContent = playerSelection.target.value;
  playerSelection = displayPlayerChoice.textContent;

  if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    displayRoundResult.textContent = 'You lose, scissors beats paper';
    computerScore++;
    displayComputerScore.textContent = computerScore;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    displayRoundResult.textContent = 'You win, paper beats rock';
    playerScore++;
    displayPlayerScore.textContent = playerScore;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    displayRoundResult.textContent = 'You win, scissors beats paper';
    playerScore++;
    displayPlayerScore.textContent = playerScore;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    displayRoundResult.textContent = 'You lose, rock beats scissors';
    computerScore++;
    displayComputerScore.textContent = computerScore;
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    displayRoundResult.textContent = 'You lose, paper beats rock';
    computerScore++;
    displayComputerScore.textContent = computerScore;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    displayRoundResult.textContent = 'You win, rock beats scissors';
    playerScore++;
    displayPlayerScore.textContent = playerScore;
  } else {
    displayRoundResult.textContent = `Tie, you both choose ${playerSelection}`;
  }
  getWinner(playerScore, computerScore);
}
