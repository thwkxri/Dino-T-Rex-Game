const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

let gameOver = document.getElementById('game__over');
const restartButton = document.getElementById('restart__button');

restartButton.addEventListener('click', (e) => {
  restartGame();
});

function restartGame() {
  gameOver.innerText = '';
  cactus.style.animation = 'cactusMove 1.75s infinite linear';
  cactus.style.left = '680px';
  restartButton.style.display = 'none';
}

document.addEventListener('keydown', (event) => {
  jump();
});

document.addEventListener('touchstart', (event) => {
  jump();
});

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  }

  setTimeout(function () {
    dino.classList.remove('jump');
  }, 700);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 205) {
    gameOver.innerText = 'Игра окончена';
    cactus.style.animation = 'none';
    cactus.style.left = '50px';
    restartButton.style.display = 'block';
  }
}, 10);