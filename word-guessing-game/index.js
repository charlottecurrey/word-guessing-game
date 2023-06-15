let currentWord = '';

function generateRandomWord() {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  currentWord = wordArray[randomIndex].word.toLowerCase();
  console.log(currentWord);
  renderInputBoxes();
}

function renderInputBoxes() {
  let inputContainer = document.getElementById('input-container');
  inputContainer.innerHTML = '';

  for (let i = 0; i < currentWord.length; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    inputContainer.appendChild(input);
  }
}

function checkGuess() {
  let inputContainer = document.getElementById('input-container');
  let inputs = inputContainer.getElementsByTagName('input');
  let guessedWord = '';
  let incorrectLetters = '';

  for (let i = 0; i < inputs.length; i++) {
    let inputValue = inputs[i].value.toLowerCase();
    guessedWord += inputValue;
    inputs[i].value = ''; // Clear the input fields

    if (inputValue !== currentWord[i]) {
      incorrectLetters += inputValue;
    }
  }

  if (guessedWord === currentWord) {
    console.log('Correct guess!');
  } else {
    console.log('Incorrect guess!');
  }

  updateInstructions(incorrectLetters);
}

function updateInstructions(incorrectLetters) {
  let hintElement = document.querySelector('.hint');
  let remainingElement = document.querySelector('.remaining');
  let wrongElement = document.querySelector('.wrong');

  hintElement.textContent = 'Hint: ' + getRandomHint();
  remainingElement.textContent = 'Remaining Guesses:';
  wrongElement.textContent = 'Wrong Letters: ' + incorrectLetters;
}

function getRandomHint() {
  let randomIndex = Math.floor(Math.random() * wordArray.length);
  return wordArray[randomIndex].hint;
}



generateRandomWord();


