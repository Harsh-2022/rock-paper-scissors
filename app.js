let userScore = 0,
  compScore = 0;

function getCompChoice() {
  let r = Math.floor(Math.random() * 3);

  if (r === 0) return "rock";
  if (r === 1) return "paper";
  if (r === 2) return "scissors";
}

function getUserChoice() {
  return prompt("Enter your choice : Rock, paper or scissors");
}

function playRound() {
  let human = getUserChoice().toLowerCase();
  let comp = getCompChoice();
  console.log(`USER: ${human}`);
  console.log(`comp: ${comp}`);

  if (human === "rock") {
    if (comp === "scissors") userScore++;
    if (comp === "paper") compScore++;
  }
  if (human === "scissors") {
    if (comp === "paper") userScore++;
    if (comp === "rock") compScore++;
  }
  if (human === "paper") {
    if (comp === "rock") userScore++;
    if (comp === "scissors") compScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) playRound();
  let winner =
    userScore > compScore
      ? "USER WINS"
      : userScore < compScore
      ? "COMPUTER WINS"
      : "DRAW";
  console.log(winner);
}

playGame();
