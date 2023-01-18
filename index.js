const game = () => {
  let count1 = 0;
  let count2 = 0;
  const letsplay = () => {
    const button = document.querySelector(".intro button");
    const screen = document.querySelector(".intro");
    const good = document.querySelector(".match");
    button.addEventListener("click", () => {
      screen.classList.add("fadeOut");
      good.classList.add("fadeIn");
    });
  };
  const letsgo = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = count1;
    computerScore.textContent = count2;
  };
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        count1++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        count2++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        count2++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        count1++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        count2++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        count1++;
        updateScore();
        return;
      }
    }
  };
  letsplay();
  letsgo();
};
game();
