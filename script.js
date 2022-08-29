'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = Number(document.querySelector('.highscore').textContent);
let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function backgroundColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

let check = function () {
  const guess = Number(document.querySelector('.guess').value);

  // if score is greater than 1
  if (score > 1) {
    // if guess is 0
    if (!guess) {
      displayMessage('No number!');

      // when player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      backgroundColor('#60b347');
      document.querySelector('.number').style.width = '30rem';

      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // when player guess is too high
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
    }

    // when player's score reaches 0
  } else {
    displayMessage('You Lost the Game!');
    score = 0;
    backgroundColor('#ff1111');
    document.querySelector('.number').textContent = secretNumber;
  }
  document.querySelector('.score').textContent = score;
}

// again function

let replay =  function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage(' Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  backgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
}


// Add Event listeners
document.querySelector('.check').addEventListener('click', check);

// when player clicks again
document.querySelector('.again').addEventListener('click', replay);


// when enter key is pressed

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter'){
    check();
  }
});

document.addEventListener('keydown', function (a) {
  if(a.key === 'Escape'){
    replay()
  }
});