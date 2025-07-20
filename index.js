// When player1 clicks on btn1, player1 experiences a choice of rolling the dice. 
let randomNumber1;
document.querySelector("#btn1").addEventListener("click", function () {
    // Prompt the name for player 1. 
    let player1 = document.querySelector("#player1").value.trim();
    if (player1 === "") {
        alert("Enter player1 name! "); 
        return;
    }
    let firstCharacterOfPlayer1 = player1.slice(0, 1);
    firstCharacterOfPlayer1 = firstCharacterOfPlayer1.toUpperCase();
    let exceptFirstCharacterOfPlayer1 = player1.slice(1, player1.length);
    player1 = firstCharacterOfPlayer1 + exceptFirstCharacterOfPlayer1;
    // Generating random number for player 1. 
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // Setting random dice image for player 1.
    let randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
});
// When player2 clicks on btn2, player2 experiences a choice of rolling the dice. 
let randomNumber2;
document.querySelector("#btn2").addEventListener("click", function () {
    // Prompt the name for player 2.
    let player1 = document.querySelector("#player1") .value.trim();
    let player2 = document.querySelector("#player2").value.trim();
    if (player1 === "" || player2 === "") {
        document.querySelector("h1").textContent = "Enter player name properly";
        return;
    }
    if (player1 === player2)
    {
        document.querySelector("h1").textContent = "Players name should be different";
        return;
    }
    let firstCharacterOfPlayer2 = player2.slice(0, 1);
    firstCharacterOfPlayer2 = firstCharacterOfPlayer2.toUpperCase();
    let exceptFirstCharacterOfPlayer2 = player2.slice(1, player2.length);
    player2 = firstCharacterOfPlayer2 + exceptFirstCharacterOfPlayer2;
    // If player1 doesn't roll the dice first, warning msg is indicated. 
    if (typeof randomNumber1 === "undefined") {
        document.querySelector("h1").textContent = player1 + " must roll the dice first.";
        return;
    }
    // Generating random number for player 2.
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // Setting random dice image for player 2.
    let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    // Checking who is the winner.
    if (randomNumber1 === randomNumber2) 
        document.querySelector("h1").textContent = "Draw!";
    else if (randomNumber1 > randomNumber2) 
        document.querySelector("h1").textContent = "🚩 " + player1 + " wins!";
    else 
        document.querySelector("h1").textContent = player2 + " wins! 🚩";
});