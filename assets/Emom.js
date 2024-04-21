const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



// Tabata Timer



//EMOM

let timer;
let timeLeft = 60;
let setsLeft = 1;
let countdownTimeLeft = 10; // Countdown time before timer starts
let timerRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const setsInput = document.getElementById('setsInput');

const sound3 = new Audio('beep.mp3');
const sound2 = new Audio('beep.mp3');
const sound1 = new Audio('beep.mp3');

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
  timerDisplay.textContent = display;
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function startTimer() {
  if (!timerRunning) {
    setsLeft = parseInt(setsInput.value, 10);
    if (setsLeft < 1) {
      alert('Please enter a valid number of sets (minimum 1)');
      return;
    }

    countdownTimeLeft = 10;
    displayTimeLeft(countdownTimeLeft);

    const countdownTimer = setInterval(() => {
      if (countdownTimeLeft > 0) {
        countdownTimeLeft--;
        displayTimeLeft(countdownTimeLeft);
        if (countdownTimeLeft === 3) {
          playSound(sound3);
        } else if (countdownTimeLeft === 2) {
          playSound(sound2);
        } else if (countdownTimeLeft === 1) {
          playSound(sound1);
        }
      } else {
        clearInterval(countdownTimer);
        startMainTimer();
      }
    }, 1000);
  }
}

function startMainTimer() {
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      displayTimeLeft(timeLeft);
      if (timeLeft === 3) {
        playSound(sound3);
      } else if (timeLeft === 2) {
        playSound(sound2);
      } else if (timeLeft === 1) {
        playSound(sound1);
      }
    } else {
      if (setsLeft > 1) {
        setsLeft--;
        timeLeft = 60;
        displayTimeLeft(timeLeft);
      } else {
        clearInterval(timer);
        timerRunning = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
      }
    }
  }, 1000);
  timerRunning = true;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(timer);
  timerRunning = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  timeLeft = 60;
  setsLeft = parseInt(setsInput.value, 10);
  displayTimeLeft(timeLeft);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

displayTimeLeft(timeLeft);





        