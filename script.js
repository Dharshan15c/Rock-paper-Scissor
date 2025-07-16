const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");
const resultText = document.getElementById("result");
const winCount = document.getElementById("win");
const loseCount = document.getElementById("lose");
const drawCount = document.getElementById("draw");

let wins = 0;
let losses = 0;
let draws = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const emojis = {
    rock: "✊",
    paper: "🖐️",
    scissors: "✌️"
  };

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Update emojis
  playerHand.textContent = emojis[playerChoice];
  computerHand.textContent = emojis[computerChoice];

  // Determine winner
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a draw!";
    draws++;
    drawCount.textContent = draws;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = "You win!";
    wins++;
    winCount.textContent = wins;
  } else {
    resultText.textContent = "You lose!";
    losses++;
    loseCount.textContent = losses;
  }
}
