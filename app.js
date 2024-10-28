let userScore = 0,
  compScore = 0;

function getCompChoice() {
  let r = Math.floor(Math.random() * 3);

  if (r === 0) return "rock";
  if (r === 1) return "paper";
  if (r === 2) return "scissors";
}

const user = document.querySelector(".user");
const comp = document.querySelector(".computer");

const reset = () => {
  userScore = 0;
  compScore = 0;

  user.innerText = `Your Score: ${userScore}`;
  comp.innerText = `Computer's Score: ${compScore}`;
};

const userdiv = document.querySelector(".userchoice");
userdiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const human = e.target.className;
    const compt = getCompChoice();
    console.log(compt);
    if (human === "rock") {
      if (compt === "scissors") userScore++;
      if (compt === "paper") compScore++;
    }
    if (human === "scissors") {
      if (compt === "paper") userScore++;
      if (compt === "rock") compScore++;
    }
    if (human === "paper") {
      if (compt === "rock") userScore++;
      if (compt === "scissors") compScore++;
    }

    user.innerText = `Your Score: ${userScore}`;
    comp.innerText = `Computer's Score: ${compScore}`;

    if (userScore === 5) {
      alert("YOU WIN !!!");
      reset();
    } else if (compScore === 5) {
      alert("YOU LOSE !!!");
      reset();
    }
  }
});
