const term = document.querySelector('.term')
const definition = document.querySelector('.definition');
const showAnswer = document.querySelector('.check');
const pass = document.querySelector('.pass');
const fail = document.querySelector('.fail');
pass.style.display = 'none';
fail.style.display = 'none';


async function getFlashcards() {
  const response = await fetch('/');
  const data = await response.json();
  return data;
}

getFlashcards().then(data => {
  const flashcard = data[Math.floor(Math.random() * data.length)];
  term.innerHTML = flashcard.term;
  definition.innerHTML = flashcard.definition;
});

showAnswer.addEventListener('click', function () {
  // Display the definition
  definition.style.display = 'block';

  // Show the "Next" button
  pass.style.display = 'block';
  fail.style.display = 'block';

  // Hide the "Show Answer" button
  showAnswer.style.display = 'none';
});

function handleButtonClick(clickedButton) {
  // Get a new word and definition
  getRandomWord();

  // Hide the definition
  definition.style.display = 'none';

  // Hide the clicked button
  clickedButton.style.display = 'none';

  // Hide the other button
  if (clickedButton === pass) {
    fail.style.display = 'none';
  } else {
    pass.style.display = 'none';
  }

  // Show the "Show Answer" button
  showAnswer.style.display = 'block';
}

pass.addEventListener('click', function () {
  handleButtonClick(pass);
});

fail.addEventListener('click', function () {
  handleButtonClick(fail);
});

fetch('http://localhost:3001/')
  .then(response => response.json())
  .then(data => {
    const flashcard = data.words[Math.floor(Math.random() * data.words.length)];
    term.innerHTML = flashcard.term;
    definition.innerHTML = flashcard.definition;
  });

