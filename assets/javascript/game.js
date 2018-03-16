// VARIABLES

// List of possible words to guess, in an array called wordBank
var wordBank = [
  'TARGARYEN',
  'STARK',
  'LANNISTER',
  'ARRYN',
  'TULLY',
  'GREYJOY',
  'BARATHEON',
  'TYRELL',
  'MARTELL'
];


var wins = 0;
var word;
var guessesRemaining;
var incorrectGuesses;
var correctGuesses;


var wordEl = document.getElementById('word');
var winsEl = document.getElementById('wins');



// FUNCTIONS

function startGame() { // initiates a round of the game with a unique, random word etc.

  word = wordBank[Math.floor(Math.random() * wordBank.length)];
  guessesRemaining = 10;
  incorrectGuesses = [];
  correctGuesses = [];

  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }
  wordEl.innerHTML = correctGuesses.join(' ');
  guessCountContainer = document.getElementById('guessCount');
  guessCountContainer.innerHTML = guessesRemaining;
  incorrectGuessContainer = document.getElementById('lettersGuessed');
  incorrectGuessContainer.innerHTML = incorrectGuesses.join(', ');
  winsEl.innerHTML = wins;
}

// checks key pressed to see if match for secret word, pushes into array (replacing underscores) if match
function updateGuesses(letter) { 

  if (word.indexOf(letter) === -1) {
    guessesRemaining--;
    guessCountContainer.innerHTML = guessesRemaining;
    
    incorrectGuesses.push(letter);
    incorrectGuessContainer.innerHTML = incorrectGuesses.join(', ');

  } else {

    for (var i = 0; i < word.length; i++) {

      if (word.charAt(i) === letter) {
        correctGuesses[i] = letter;
      }
    }
    wordEl.innerHTML = correctGuesses.join(' ');
  }
}

// checks to see if the game/round is over and is a win or loss -- if win or loss, then runs startGame();
function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    startGame();
    wins++;
    winsEl.innerHTML = wins;

  } else if (guessesRemaining === 0) {
    startGame();
  }
}

// captures key press from keyboard and runs it through the updateGuesses() function
document.onkeyup = function(event) {
  var letterGuessed = event.key.toUpperCase();
  updateGuesses(letterGuessed);
  checkWin();
};

startGame();