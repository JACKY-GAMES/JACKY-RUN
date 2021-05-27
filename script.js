const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

const JUMPSOUND = new Audio();
JUMPSOUND.src = "assets/jump.wav";

const DIESOUND = new Audio();
DIESOUND.src = "assets/die.wav";

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('click', (event) => {
  if (!dino.classList.contains('jump-animation')) {
	  JUMPSOUND.play();
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino)
    .getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock)
    .getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
	  DIESOUND.play();
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);
