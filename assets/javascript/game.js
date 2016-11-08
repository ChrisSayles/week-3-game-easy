var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = [];
var guessesPicked = []
var lastKey;

document.onkeyup = function(event) {
        var lastKey = String.fromCharCode(event.keyCode).toLowerCase();

        console.log("You entered: " + lastKey);
        console.log("computer chooses:" + computerGuess);}
    

var computerGuess = options[Math.floor(Math.random() * options.length)];
  		console.log(computerGuess);



