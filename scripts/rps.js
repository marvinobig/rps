let player = prompt("What is your name?");
let playerN = player.slice(0, 1);
let playerNC = playerN.toUpperCase();
let playerN1 =player.substr(1);
let playerN2 = playerN1.toLowerCase();
let formatedPlayerName = playerNC + playerN2;


document.getElementById("p-name").innerHTML = formatedPlayerName;

document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);

function rock() {
    document.getElementById("p-choice").innerHTML = "Rock";
    document.getElementById("p-img").src = "";
    document.getElementById("p-img").alt = "";
    cpuChoice();
    document.getElementById("c-choice").innerHTML = cChoice;
};

function paper() {
    document.getElementById("p-choice").innerHTML = "Paper";
    document.getElementById("p-img").src = "";
    document.getElementById("p-img").alt = "";
    cpuChoice();
    document.getElementById("c-choice").innerHTML = cChoice;
};

function scissors() {
    document.getElementById("p-choice").innerHTML = "Scissors";
    document.getElementById("p-img").src = "";
    document.getElementById("p-img").alt = "";
    cpuChoice();
    document.getElementById("c-choice").innerHTML = cChoice;
};

function cpuChoice() {

};

function winner () {

};

