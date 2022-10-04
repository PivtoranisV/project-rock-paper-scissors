const option = ["paper", "scissors", "rock"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
}

function getUserChoice() {
  const userSelection = "rock";
  //   const userSelection = prompt(
  //     "What is your choice? Paper or Scissors or maybe Rock? "
  //   );
  return userSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let playerScore = 0;
  let computerScore = 0;
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You lose, scissors beats paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You win, paper beats rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You win, scissors beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You lose, rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You lose, paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You win, rock beats scissors");
  } else {
    console.log(`Tie, you both choose ${playerSelection}`);
  }
  return `Your score is ${playerScore} and computer score is ${computerScore}`;

  //return computer win else player win
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

console.log(game());
//console.log(playRound(playerSelection, computerSelection));
