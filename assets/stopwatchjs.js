




let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');
let tabContainer = document.querySelector('.tab-filter-item-container');

function setActiveTab(select_tab) {
  for (let t = 0; t < tab_items.length; t++) {
    tabContainer.style.height = tab_items[t].scrollHeight + 'px';
    if (tab_items[t].classList.contains(select_tab)) {
      tab_items[t].classList.add('select_tab');
    } else {
      tab_items[t].classList.remove('select_tab');
    }
  }
}

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    setActiveTab(select_tab);
  });
}

for (let th = 0; th < tab_items.length; th++) {
  tabContainer.style.height = tab_items[th].scrollHeight + 'px';
}


/* Pomodoro Timer */



// stop watch

let timer;
let running = false;
let lapStartTime;
let totalStartTime;
let lapTimes = [];

function startPause() {
    const button = document.getElementById("startPauseBtn");
    if (!running) {
        button.textContent = "Pause";
        totalStartTime = Date.now() - (lapTimes.length > 0 ? lapTimes.reduce((acc, curr) => acc + curr.lapTime, 0) : 0);
        lapStartTime = Date.now() - (lapTimes.length > 0 ? lapTimes.reduce((acc, curr) => acc + curr.lapTime, 0) : 0);
        timer = setInterval(updateStopwatch, 10);
    } else {
        button.textContent = "Start";
        clearInterval(timer);
    }
    running = !running;
}

function updateStopwatch() {
    const elapsedTime = Date.now() - totalStartTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("stopwatch").textContent = formattedTime;
}

function reset() {
    clearInterval(timer);
    document.getElementById("stopwatch").textContent = "00:00:00";
    document.getElementById("startPauseBtn").textContent = "Start";
    running = false;
    lapTimes = [];
    document.getElementById("lap-times").innerHTML = "";
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsFormatted = String(milliseconds % 1000).padStart(3, "0");
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${millisecondsFormatted.slice(0, -1)}`;
}

function recordLap() {
    if (running) {
        const lapEndTime = Date.now();
        const lapTime = lapEndTime - lapStartTime;
        const totalTime = lapEndTime - totalStartTime;
        lapTimes.push({ lapTime, totalTime });
        const lapList = document.getElementById("lap-times");
        const lapItem = document.createElement("tr");
        lapItem.innerHTML = `<td>${lapTimes.length}</td><td>${formatTime(lapTime)}</td><td>${formatTime(totalTime)}</td>`;
        lapList.appendChild(lapItem);
        lapStartTime = lapEndTime;
    }
}

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

