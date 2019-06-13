var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0; //starting point
var losses = 0;
var numberGuesses = 0;
var userGuesses = [ ]; //user to enter dynamically - quotation marks can be used, too
var playerGuess;
var computerChoice;


document.onkeyup = function(event) {
    playerGuess = event.key; //event.key captures player's key
    //for logic of game - others (above) for global scope

    //console.log (playerGuess);
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
        win ++; //++ means increment by 1
        numberGuesses = 0;
    }
     //taking record of guesses (keys) player has pushed and sends it to that array (on Line 8)
    //console.log (userGuesses); //console log as an array - see Line 8

    var element  = document.getElementById();
    console.log("userGuesses: " + userGuesses);
    console.log("chances: " + numberGuesses);
    console.log("user guess: " + playerGuess);
    console.log("computer guess: " + computerChoice);
}