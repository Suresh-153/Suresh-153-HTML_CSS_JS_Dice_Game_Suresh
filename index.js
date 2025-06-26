// Prompt player 1. 
var player1 = prompt("Hey, player1. What's your name? ");
var firstCharacterOfPlayer1 = player1.slice(0, 1);
firstCharacterOfPlayer1 = firstCharacterOfPlayer1.toUpperCase();
var exceptFirstCharacterOfPlayer1 = player1.slice(1, player1.length);
player1 = firstCharacterOfPlayer1 + exceptFirstCharacterOfPlayer1;
player1 = document.querySelector(".player1").innerHTML = player1;
// Prompt player 2. 
var player2 = prompt("Hey, player2. What's your name? ");
var firstCharacterOfPlayer2 = player2.slice(0, 1);
firstCharacterOfPlayer2 = firstCharacterOfPlayer2.toUpperCase();
var exceptFirstCharacterOfPlayer2 = player2.slice(1, player2.length);
player2 = firstCharacterOfPlayer2 + exceptFirstCharacterOfPlayer2;
player2 = document.querySelector(".player2").innerHTML = player2;
var randomNumber1;
var randomDiceImage1;
function rollDice1() {
    // Generating random number for player 1. 
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // Setting random dice image for player 1.
    randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
}
var randomNumber2;
var randomDiceImage2;
function rollDice2() {
    // Generating random number for player 2.
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // Setting random dice image for player 2.
    randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    // Checking who is the winner.
    if (!(player1 == "") && !(player2 == "") && !(player1 == player2) && !(player1 == "" && player2 == "")) {
        if (randomDiceImage1 == randomDiceImage2) 
            document.querySelector("h1").textContent = "Draw!";
        else if (randomDiceImage1 > randomDiceImage2) 
            document.querySelector("h1").textContent = "🚩 " + player1 + " wins!";
        else 
            document.querySelector("h1").textContent = player2 + " wins! 🚩";
    }
    else 
        document.querySelector("h1").textContent = "Enter player's name properly!!..";
}