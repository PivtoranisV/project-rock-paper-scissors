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
