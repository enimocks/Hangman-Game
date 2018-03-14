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


var wordContainer = document.getElementById('word');
var winsContainer = document.getElementById('wins');



// FUNCTIONS

function startGame() {

  word = wordBank[Math.floor(Math.random() * wordBank.length)];
  guessesRemaining = 10;
  incorrectGuesses = [];
  correctGuesses = [];

  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }
  wordContainer.innerHTML = correctGuesses.join(' ');
  guessCountContainer = document.getElementById('guessCount');
  guessCountContainer.innerHTML = guessesRemaining;
  incorrectGuessContainer = document.getElementById('lettersGuessed');
}

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
    wordContainer.innerHTML = correctGuesses.join(' ');
  }
}

function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    startGame();
    wins++;
    winsContainer.innerHTML = wins;

  } else if (guessesRemaining === 0) {
    startGame();
  }
}


document.onkeyup = function(event) {
  var letterGuessed = event.key.toUpperCase();
  updateGuesses(letterGuessed);
  checkWin();
};

startGame();