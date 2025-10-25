function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    console.log("Computer chose:", computerChoice);
    console.log("Your chose:", humanChoice);

    if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log(`${computerChoice} beats ${humanChoice}.`);
      computerScore += 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      console.log(`${computerChoice} beats ${humanChoice}.`);
      computerScore += 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      console.log(`${computerChoice} beats ${humanChoice}.`);
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`${humanChoice} beats ${computerChoice}.`);
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`${humanChoice} beats ${computerChoice}.`);
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`${humanChoice} beats ${computerChoice}.`);
      humanScore += 1;
    } else {
      console.log("No one won the round! It is a tie.");
    }
    console.log(`Computer Score: ${computerScore}`, `Human Score: ${humanScore}`);
  }

  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());

  if (computerScore === humanScore) {
    console.log("No one won the game! It is a tie.");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("You won the game!");
  }
}

playGame();
