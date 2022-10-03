const option = ["paper", "scissors", "rock"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
}

function getUserChoice() {
  const userSelection = prompt(
    "What is your choice? Paper or Scissors or maybe Rock? "
  );
  return userSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  //   console.log(computerSelection);
  //   console.log(playerSelection);
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose, scissors beats paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win, paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win, scissors beats paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose, rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose, paper beats rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win, rock beats scissors";
  } else {
    return `Tie, you both choose ${playerSelection}`;
  }
}

const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
