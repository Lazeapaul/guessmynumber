'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct  number🎉🎉🎉 ';

// document.querySelector('.number') = 13;
// document.querySelector('.score')= 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//FUNCTION DECLARATION ==================================
//const x = function () {
// console.log (23); }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.getElementById('btncheck').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!😜👏👏👏 ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.getElementById('btncheck').textContent = 'WIN ';
    document.querySelector('.number').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.getElementById('highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!😜 ';
      score--;
      document.querySelector('.score').textContent = highscore;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 🖤🤎🖤';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!😜 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You lost the game 🖤🤎🖤';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.getElementById('btnagain').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...😜 ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.getElementById('btncheck').textContent = 'Check !';
});

//video 77 highscore
