const buttons = document.querySelectorAll(".button-option");
const restartButton = document.getElementById("restart");
const newGameButton = document.getElementById("new-game");
const popup = document.querySelector(".popup");

let currentPlayer = "X";
let gameActive = true;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameActive && button.textContent === "") {
      button.textContent = currentPlayer;
      button.classList.add(currentPlayer);
      if (checkWin()) {
        endGame(currentPlayer + " wins!");
      } else if (checkDraw()) {
        endGame("It's a draw!");
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

restartButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", startNewGame);

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      buttons[a].textContent === buttons[b].textContent &&
      buttons[a].textContent === buttons[c].textContent &&
      buttons[a].textContent !== ""
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return Array.from(buttons).every((button) => button.textContent !== "");
}

function endGame(message) {
  popup.querySelector("#massage").textContent = message;
  popup.classList.remove("hide");
  gameActive = false;
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  popup.classList.add("hide");
  buttons.forEach((button) => {
    button.textContent = "";
    button.classList.remove("X", "O");
  });
}

function startNewGame() {
  resetGame();
}

