let currentWord = {};
let maxGuesses = 5;
let remainingGuesses = maxGuesses;
let wrongGuesses = [];

function generateRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  currentWord = wordArray[randomIndex];
  console.log(currentWord.word);
  renderInputBoxes();
  updateInstructions();
}

// function getCurrentHint() {
//   return currentHint;
// }

function renderInputBoxes() {
  const inputContainer = document.querySelector('.inputs');
  const inputBoxes = inputContainer.querySelectorAll('input');

  // Clear any existing input boxes
  inputBoxes.forEach((input) => inputContainer.removeChild(input));

  // Create input boxes for the new word
  for (let i = 0; i < currentWord.word.length; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    inputContainer.appendChild(input);
  }
}

function checkGuess() {
  let inputContainer = document.querySelector('.inputs');
  let inputs = inputContainer.getElementsByTagName('input');
  let guessedWord = '';
  let incorrectLetters = [];

  for (let i = 0; i < inputs.length; i++) {
    let inputValue = inputs[i].value.toLowerCase();
    guessedWord += inputValue;

    if (!currentWord.word.includes(inputValue)) {
      incorrectLetters.push(inputValue);
    } else if (inputValue !== currentWord.word[i]) {
      // Clear the input field if the correct letter is in the wrong spot
      inputs[i].value = '';
    }
  }

  remainingGuesses--;

  if (guessedWord === currentWord.word) {
    console.log('Correct guess!');
    remainingGuesses = maxGuesses; // Reset remaining guesses for the next round
    generateRandomWord(); // Start a new round
  } else if (remainingGuesses === 0) {
    console.log('No more guesses. The correct word is: ' + currentWord.word);
    remainingGuesses = maxGuesses; // Reset remaining guesses for the next round
    generateRandomWord(); // Start a new round
  }

  wrongGuesses = incorrectLetters; // Update the wrong guesses
  updateInstructions();
}



function updateInstructions() {
  const remainingElement = document.querySelector('.remaining');
  const wrongElement = document.querySelector('.wrong');

  remainingElement.textContent = `Remaining Guesses: ${remainingGuesses}`;
  wrongElement.textContent = `Wrong Letters: ${wrongGuesses.join(', ')}`;
}



generateRandomWord();


