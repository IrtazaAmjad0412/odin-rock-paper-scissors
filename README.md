# Odin Rock-Paper-Scissors

A simple **Rock-Paper-Scissors** game implemented in JavaScript. This project emphasizes fundamental JavaScript concepts, such as functions, and conditionals. Notably, the game is implemented **without using loops, arrays, or objects**, showcasing a straightforward procedural approach.

## Features

- Play a 5-round Rock-Paper-Scissors game against the computer.
- Each round, both the user and the computer make a choice, and the winner is determined immediately.
- Scores are tracked for both the human player and the computer.
- A final message displays the overall winner after 5 rounds.
- User input is handled via `window.prompt`.

## How It Works

### Computer Choice

The computer randomly selects a choice among `"rock"`, `"paper"`, or `"scissors"` using `Math.random()`:

```javascript
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) return "rock";
  else if (randomNum === 2) return "paper";
  else return "scissors";
}
```

### Human Choice

The human player is prompted to enter their choice. Input is automatically converted to lowercase to simplify comparison:

```javascript
function getHumanChoice() {
  return window.prompt("Choose Rock, Paper, or Scissors", "").toLowerCase();
}
```

### Playing a Round

Each round compares the computer and human choices using if-else statements only. There are no loops, arrays, or objects:

```javascript
function playRound(computerChoice, humanChoice) {
  // Logic to determine the round winner
}
```

Scores are updated individually for each possible outcome.

### Playing the Game

The game is played for exactly 5 rounds by manually calling playRound() five times. After the rounds, the scores are compared to determine the winner:

```javascript
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
playRound(getComputerChoice(), getHumanChoice());
```

Finally, the game announces the winner or a tie.
