let player = prompt("What is your name?");
let rounds = parseInt(prompt("How many rounds would you like to play?"));

document.getElementById("p-name").innerHTML = player;

for (let i = 0; i < rounds; i++) {
    document.getElementById("rock").addEventListener("click", rock);
    document.getElementById("paper").addEventListener("click", paper);
    document.getElementById("scissors").addEventListener("click", scissors);

    function rock () {
        document.getElementById("p-choice").innerHTML = "Rock";
    };

    function paper () {
        document.getElementById("p-choice").innerHTML = "Paper";
    };

    function scissors () {
        document.getElementById("p-choice").innerHTML = "Scissors";
    };

    function cpuChoice () {

    };

    function winner () {

    };
};
