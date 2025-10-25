# 🪨📄✂️ Odin Rock-Paper-Scissors

A simple **Rock-Paper-Scissors** game built with vanilla JavaScript, HTML, and CSS.  
Players can play against the computer, and the game keeps track of both scores in real time.

---

## 🎮 Features

- Choose between **Rock**, **Paper**, or **Scissors**.
- The computer makes a random selection each round.
- The scores for both **human** and **computer** are updated dynamically.
- Displays each player’s choice after every round.
- No external libraries or frameworks — pure JavaScript!

---

## 🧩 How It Works

1. When the page loads, three buttons — **Rock**, **Paper**, and **Scissors** — are dynamically created.
2. Each button click:
   - Gets the computer’s random choice.
   - Compares the human and computer selections.
   - Updates and displays scores and choices in real time.
3. The game continues indefinitely, allowing repeated rounds.

---

## 🧠 Game Logic

| Human Choice | Computer Choice | Winner          |
| ------------ | --------------- | --------------- |
| Rock         | Scissors        | Human           |
| Paper        | Rock            | Human           |
| Scissors     | Paper           | Human           |
| Same Choice  | Same Choice     | Tie (no points) |

The game increases the score for whoever wins the round, and logs a message to the console in case of a tie.

---

## 🛠️ Technologies Used

- **HTML5** – For structuring the page dynamically through JavaScript.
- **CSS3** – (Optional) You can add styles for the buttons and layout.
- **JavaScript (ES6)** – Core logic and DOM manipulation.

---

## 🚀 How to Run

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Click on one of the buttons to start playing!
