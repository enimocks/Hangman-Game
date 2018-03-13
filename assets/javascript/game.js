// VARIABLES

// List of possible words to guess, in an array called wordBank
var wordBank = [
  'targaryen',
  'stark',
  'lannister',
  'arryn',
  'tully',
  'greyjoy',
  'baratheon',
  'tyrell',
  'martell'
];


var wins;
var word;
var guessesRemaining;
var incorrectGuesses;
var correctGuesses;


var wordElement = document.getElementById('word');


var wins = document.getElementById('wins');


// Uses rand number, set to all possible index values of wordBank, to choose a word from wordBank.
var word = wordBank[Math.floor(Math.random() * wordBank.length)];


// FUNCTIONS

function startGame() {
  wins = 0;
  word = word;
  guessesRemaining = 10;
  incorrectGuesses = [];
  correctGuesses =[];

  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }
  wordElement.innerHTML = correctGuesses.join(' ');
  guessCountElement = document.getElementById('guessCount');
  guessCountElement.innerHTML = guessesRemaining;
  lettersGuessedElement = document.getElementById('lettersGuessed');
}

function updateGuesses(letter) {


  if (word.indexOf(letter) === -1) {
    guessesRemaining--;
    guessCountElement.innerHTML = guessesRemaining;
    
    incorrectGuesses.push(letter);
    lettersGuessedElement.innerHTML = incorrectGuesses.join(', ');

  } else {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === letter) {
        correctGuesses[i] = letter;
      }
    }
    wordElement.innerHTML = correctGuesses.join(' ');
  }
}

function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    wins++;
    wins.innerHTML = wins;

  } else if (guessesRemaining === 0) {
    alert('You Lost!');

  }
}


document.onkeyup = function(event) {
  var letterGuessed = event.key.toLowerCase();
  updateGuesses(letterGuessed);
  checkWin();
};

startGame();
