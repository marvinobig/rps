let player = prompt("What is your name?"); // askes for players name
let playerN = player.slice(0, 1); // takes first letter of given name
let playerNC = playerN.toUpperCase(); // capitalises first letter
let playerN1 =player.substr(1); // takes the remaining letters of given name
let playerN2 = playerN1.toLowerCase(); // turns remaining letters to lower case
let formatedPlayerName = playerNC + playerN2; // combines capitalised first letter and remaining lower case letters


document.getElementById("p-name").innerHTML = formatedPlayerName;

document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

// if player chooses rock
function rock() {
    document.getElementById("p-choice").innerHTML = "Rock";
    
    return cpuChoice();
};

// if player chooses paper
function paper() {
    document.getElementById("p-choice").innerHTML = "Paper";
    
    return cpuChoice();
};

// if player chooses scissors
function scissors() {
    document.getElementById("p-choice").innerHTML = "Scissors";
    
    return cpuChoice();
};

/* function calculates and stores computers choice in 
a variable */
function cpuChoice() {
    const CHOICES = ["Rock", "Paper", "Scissors"];
    let cMove = CHOICES[Math.floor(Math.random()*CHOICES.length)];

    document.getElementById("c-choice").innerHTML = cMove;
    
};

function winner () {

};

