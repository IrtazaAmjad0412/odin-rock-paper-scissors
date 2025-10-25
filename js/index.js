const rpsChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return rpsChoices[randomNum];
};

console.log(getComputerChoice());

const createRpsBtns = (arr, onClick) => {
  const rpsContainer = document.createElement("div");
  rpsContainer.className = "rps-container";
  document.body.appendChild(rpsContainer);

  arr.forEach((choice) => {
    const rpsBtn = document.createElement("button");
    rpsBtn.textContent = choice;

    rpsBtn.addEventListener("click", (e) => onClick(e.target.textContent));
    rpsContainer.appendChild(rpsBtn);
  });
};

const displayChoices = (humanChoice) => {
  const computerChoice = getComputerChoice();

  const resultContainer = document.createElement("div");
  resultContainer.className = "result-container";

  const computerChoicePara = document.createElement("p");
  computerChoicePara.textContent = `Computers chose: ${computerChoice}`;

  const humanChoicePara = document.createElement("p");
  humanChoicePara.textContent = `You chose: ${humanChoice}`;

  resultContainer.append(computerChoicePara, humanChoicePara);
  document.body.appendChild(resultContainer);
};

createRpsBtns(rpsChoices, displayChoices);

// function playGame() {}

// playGame();
