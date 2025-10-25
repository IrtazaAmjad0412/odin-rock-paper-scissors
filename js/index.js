const rpsChoices = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

const resultContainer = document.createElement("div");
resultContainer.className = "result-container";

const computerChoicePara = document.createElement("p");
const computerScorePara = document.createElement("p");
const humanChoicePara = document.createElement("p");
const humanScorePara = document.createElement("p");

resultContainer.append(
  computerChoicePara,
  humanChoicePara,
  computerScorePara,
  humanScorePara
);

document.body.appendChild(resultContainer);

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return rpsChoices[randomNum];
};

const createRpsBtns = (arr, onClick) => {
  const rpsContainer = document.createElement("div");
  rpsContainer.className = "rps-container";
  document.body.appendChild(rpsContainer);

  arr.forEach((choice) => {
    const rpsBtn = document.createElement("button");
    rpsBtn.textContent = choice;

    rpsBtn.addEventListener("click", () => onClick(choice));
    rpsContainer.appendChild(rpsBtn);
  });
};

const compareChoices = (humanChoice) => {
  const computerChoice = getComputerChoice();

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore += 1;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
  } else if (computerChoice === humanChoice) {
    console.log("No one won the round! It is a tie.");
  }

  return { computerChoice, computerScore, humanChoice, humanScore };
};

const displayChoicesandScore = (humanChoice) => {
  const result = compareChoices(humanChoice);

  computerChoicePara.textContent = `Computer chose: ${result.computerChoice}`;
  computerScorePara.textContent = `Computer score: ${result.computerScore}`;
  humanChoicePara.textContent = `You chose: ${result.humanChoice}`;
  humanScorePara.textContent = `Your score: ${result.humanScore}`;
};

createRpsBtns(rpsChoices, displayChoicesandScore);
