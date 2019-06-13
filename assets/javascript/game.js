var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var losses = 0;
var numberGuesses = 0;
var userGuesses = [ ];
var playerGuess;
var computerChoice;


document.onkeyup = function(event) {
    playerGuess = event.key; 

    if (numberGuesses == 0 ) {
        computerChoice = letterChoice[Math.floor(Math.random() * letterChoice.length)];
        userGuesses = [];
        numberGuesses = 9;
    }

    if (playerGuess !== computerChoice) {

        if (userGuesses.indexOf(playerGuess) === -1) {
            userGuesses.push(playerGuess)
            numberGuesses--;
            if (numberGuesses === 0) {
                losses++;
            }
        }
    } else {
        win ++;
        numberGuesses = 0;
    }

    document.getElementById("win").innerHTML = win;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("numberGuesses").innerHTML = numberGuesses;
    document.getElementById("userGuesses").innerHTML = userGuesses;
    console.log("userGuesses: " + userGuesses);
    console.log("chances: " + numberGuesses);
    console.log("user guess: " + playerGuess);
    console.log("computer guess: " + computerChoice);
}