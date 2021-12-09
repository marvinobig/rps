playerName();

function playerName() {
    // askes for players name
    let player;

    do{
        player = prompt("What is your name?");
    }while (player === null);
    

    /* capitalised first letter & 
    turns remaining letters to lower case */
    let playerN = player.slice(0, 1).toUpperCase();
    let playerN1 = player.substr(1).toLowerCase();

    /* combines capitalised first letter 
    and remaining lower case letters */
    let formatedPlayerName = playerN + playerN1;

    document.getElementById("p-name").textContent = formatedPlayerName;

    if (player === "") {
    document.getElementById("p-name").textContent = "Unknown";
    };
};

// if player chooses rock
document.getElementById("rock").addEventListener("click", rock);

function rock() {
  document.getElementById("p-choice").textContent = "Rock";
  document.getElementById("p-img").src = "../Media/rock.png";
  return cpuChoice();
}

// if player chooses paper
document.getElementById("paper").addEventListener("click", paper);

function paper() {
  document.getElementById("p-choice").textContent = "Paper";
  document.getElementById("p-img").src = "../Media/paper.png";
  return cpuChoice();
}

// if player chooses scissors
document.getElementById("scissors").addEventListener("click", scissors);

function scissors() {
  document.getElementById("p-choice").textContent = "Scissors";
  document.getElementById("p-img").src = "../Media/scissors.png";
  return cpuChoice();
}

/* function calculates and stores computers choice in 
a variable */
function cpuChoice() {
  const CHOICES = ["Rock", "Paper", "Scissors"];
  let cMove = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  document.getElementById("c-choice").textContent = cMove;

  if (cMove === "Rock") {
      document.getElementById("c-img").src = "../Media/rock.png";
  }else if (cMove === "Paper") {
      document.getElementById("c-img").src = "../Media/paper.png";
  }else if (cMove === "Scissors") {
      document.getElementById("c-img").src = "../Media/scissors.png";
  };

  let playerChoice = document.getElementById("p-choice").textContent;
  let pScore = document.getElementById("p-score").textContent;
  let cScore = document.getElementById("c-score").textContent;
  let playerScore = parseInt(pScore);
  let cpuScore = parseInt(cScore);

  //score tracker
  if (playerChoice === "Rock" && cMove === "Scissors") {
    document.getElementById("p-score").textContent = ++playerScore;
  } else if (playerChoice === "Scissors" && cMove === "Rock") {
    document.getElementById("c-score").textContent = ++cpuScore;
  } else if (playerChoice === "Paper" && cMove === "Rock") {
    document.getElementById("p-score").textContent = ++playerScore;
  } else if (playerChoice === "Rock" && cMove === "Paper") {
    document.getElementById("c-score").textContent = ++cpuScore;
  } else if (playerChoice === "Scissors" && cMove === "Paper") {
    document.getElementById("p-score").textContent = ++playerScore;
  } else if (playerChoice === "Paper" && cMove === "Scissors") {
    document.getElementById("c-score").textContent = ++cpuScore;
  };
};

document.getElementById("reset-b").addEventListener("click", reset);

function reset() {
    document.getElementById("p-score").textContent = "0";
    document.getElementById("c-score").textContent = "0";

    document.getElementById("p-choice").textContent = "";
    document.getElementById("c-choice").textContent = "";
    document.querySelector("img").src = ""

    document.getElementById("p-name").textContent = "Human";

    return playerName();
};