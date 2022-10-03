const option = ["Paper", "Scissors", "Rock"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
}
