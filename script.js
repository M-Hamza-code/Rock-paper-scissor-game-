let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  console.log("choice was clicked by user", userChoice);

  const computerChoice = genCompChoice();
  console.log("choice was clicked by computer", computerChoice);
  if (userChoice === computerChoice) {
    console.log("Game was draw");
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "#1e5492";
  } else {
    let userWin = true;
    if (userChoice === "paper") {
      //rock,scissor
      userWin = computerChoice === "rock" ? true : false;
    } else if (userChoice === "rock") {
      //paper,scissor
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "scissor") {
      //paper,rock
      userWin = computerChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    console.log("you win");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("you lose");
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `you lost! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
