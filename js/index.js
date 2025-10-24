function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  console.log(randomNum);

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else if (randomNum === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  return window.prompt("Choose Rock, Paper, or Scissors", "").toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  let computerScore = 0;
  let humanScore = 0;
  console.log(computerChoice);
  console.log(humanChoice);
  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore += 1;
  } else {
    console.log("No one won! It is a tie.");
  }
  console.log(`Computer Score: ${computerScore}`, `Human Score: ${humanScore}`);
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
console.log(playRound(computerSelection, humanSelection));
