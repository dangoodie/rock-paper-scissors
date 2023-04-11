let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const gameContainer = document.querySelector(".game-container");
const gameScore = document.createElement("p");
const gameOutput = document.createElement("p");
gameContainer.appendChild(gameScore);
gameContainer.appendChild(gameOutput);
updateScoreboard();
gameOutput.textContent = "Make a selection to start";

function updateScoreboard() {
  gameScore.textContent = `Player: ${playerScore} Computer:${computerScore}`;
}

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
    message = "tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    message = "lose";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    message = "win";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    message = "win";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    message = "lose";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    message = "lose";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    message = "win";
  } else {
    console.error("not a valid input");
    return "ERROR";
  }
  return message;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerSelection = e.target.className;
    computerSelection = getComputerChoice();
    message = playRound(playerSelection, computerSelection);
    if (message === "win") playerScore++;
    if (message === "lose") computerScore++;

    updateScoreboard();

    gameOutput.textContent = `You picked: ${playerSelection}. The computer picked: ${computerSelection}. ${message}`;
  });
});
