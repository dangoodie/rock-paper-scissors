function getComputerChoice() {
  let choice = "";
  let key = Math.floor(Math.random() * 3) + 1;

  switch (key) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      console.error("Invalid selection");
      break;
  }
  return choice;
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase().trim();

  let message = "";

  if (playerSelection === computerSelection) {
    message = "Tie game!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    message = "You lose! The computer wins.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    message = "You win! The computer loses.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "You win! The computer loses.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    message = "You lose! The computer wins.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    message = "You lose! The computer wins.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = "You win! The computer loses.";
  } else {
    console.error("not a valid input")
  }
  return message;
}
