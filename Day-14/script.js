// Your code here
// Number Guessing Game – Perfect Version

let secretNumber;
let attempts;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

// Start / Reset Game
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 5;

  attemptsText.textContent = attempts;
  message.textContent = "";

  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;
}

// Guess Button Logic
guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Enter a number between 1 and 100";
    return;
  }

  attempts--;
  attemptsText.textContent = attempts;

  if (userGuess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    guessInput.disabled = true;
    guessBtn.disabled = true;
    return;
  }

  if (attempts === 0) {
    message.textContent = `💀 Game Over! Number was ${secretNumber}`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
    return;
  }

  if (userGuess > secretNumber) {
    message.textContent = "📉 Too high!";
  } else {
    message.textContent = "📈 Too low!";
  }

  guessInput.value = "";
});

// Restart Button
restartBtn.addEventListener("click", startGame);

// Start game on page load
startGame();