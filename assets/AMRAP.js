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

//AMRAP

var interval; // Variable to store the timer interval
var countdownInterval; // Variable to store the countdown interval
var totalTimeInSeconds; // Variable to store the total time in seconds
var countdownSeconds; // Variable to store the countdown seconds
var timerDisplay; // Variable to store the timer display element
var countdownSound = document.getElementById("countdownSound");
var timerTickSound = document.getElementById("timerTickSound");
var timerCompleteSound = document.getElementById("timerCompleteSound");

function startTimer() {
    var inputMinutes = document.getElementById("minutes").value;
    timerDisplay = document.getElementById("timer");

    if (inputMinutes <= 0) {
        alert("Please enter a positive integer for minutes.");
        return;
    }

    totalTimeInSeconds = inputMinutes * 60;
    countdownSeconds = 10; // Countdown from 10 seconds

    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateTimer() {
    var minutes = Math.floor(totalTimeInSeconds / 60);
    var seconds = totalTimeInSeconds % 60;

    var displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    var displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = displayMinutes + ":" + displaySeconds;

    if (totalTimeInSeconds <= 0) {
        clearInterval(interval);
        timerDisplay.textContent = "Timer complete!";
        timerCompleteSound.play(); // Play timer complete sound
    } else if (totalTimeInSeconds === 3 || totalTimeInSeconds === 2 || totalTimeInSeconds === 1) {
        timerTickSound.play(); // Play timer tick sound
    }

    totalTimeInSeconds--;
}

function updateCountdown() {
    timerDisplay.textContent = "" + countdownSeconds + "";
    countdownSeconds--;

    if (countdownSeconds === 2 || countdownSeconds === 1 || countdownSeconds === 0) {
        countdownSound.play(); // Play countdown sound
    }

    if (countdownSeconds < 0) {
        clearInterval(countdownInterval);
        interval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    clearInterval(countdownInterval);
}

function resetTimer() {
    clearInterval(interval);
    clearInterval(countdownInterval);
    timerDisplay.textContent = "00:00";
}
