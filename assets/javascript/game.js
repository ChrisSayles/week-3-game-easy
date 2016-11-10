
// Random Letters that the computer can choose from.
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//List of Variables used for Psychic Game
var wins = 0;
var losses = 0;
var guesses = 9;
var remainingGuesses = 9;
//preivousLetters has [] because we will push to this
var previousLetters = [];
//RandomLetter does not need to equal a value
var RandomLetter;

//User types letter and input is logged
  document.onkeyup = function(event) {
    remainingGuesses--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);         
  

  // Push letters to show in html and update based off user input
    previousLetters.push(userGuess);
    updateremainingGuesses();
    updateGuessesSoFar();
  // If guesses left >0 and user guess = the random letter add win increment and push text to html and send win alert.
  // resets game upon correct guess    
      if (remainingGuesses > 0) {
        if (userGuess == RandomLetter) {
          wins++;
          document.querySelector('#wins').innerHTML = "Wins: " + wins;
          alert("You are a real psychic!");
          reset();
        }
  // Losing Scenario.  Reset after Loss.  Push Losing Text     
      }else if(remainingGuesses== 0) {
          losses++;
          document.querySelector('#losses').innerHTML = "Losses: " + losses;
          alert("You are a false prophet!");
          reset();
      }
};

//Computer to generate a random letter using Math.Floor...console log will verify random generation
  var computerGuess = options[Math.floor(Math.random() * options.length)];
  console.log(computerGuess)

//Setting how many guesses the user will get then displaying in our HTML
  var updateremainingGuesses = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + remainingGuesses;
  };
//Updating the HTML letters to guess.  using .this  to point to the object where the method is being executed
  var updateLettersToGuess = function() {
    this.RandomLetter = this.options[Math.floor(Math.random() * this.options.length)];
  };

//updating the letters already guessed ...join will be used to wait for one thread to end before executing
  var updateGuessesSoFar = function() {
    document.querySelector('#letters').innerHTML = "Your Guesses so far: " + previousLetters.join(', ');
  };

// these are the functions used for reseting
  var reset = function() {
    totalGuesses = 9;
    remainingGuesses = 9;
    previousLetters = 9;
    previousLetters = [];

    updateLettersToGuess();
    updateremainingGuesses();
    updateGuessesSoFar();
  };


