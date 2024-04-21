
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
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


/*digital clock */
let is24HourFormat = false;

function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const options12Hr = { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' };
  const options24Hr = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const formattedTime = is24HourFormat ? now.toLocaleTimeString('en-US', options24Hr) : now.toLocaleTimeString('en-US', options12Hr);
  const formattedDate = now.toLocaleDateString('en-US', optionsDate);

  timeElement.textContent = formattedTime;
  dateElement.textContent = formattedDate;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to set the time immediately
updateTime();

// Toggle between 12-hour and 24-hour formats
const formatBtn = document.getElementById('formatBtn');
formatBtn.addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  formatBtn.textContent = is24HourFormat ? '24 Hr' : '12 Hr';
});

// Function to update background image
document.getElementById('bgImage').addEventListener('change', function() {
  const reader = new FileReader();
  reader.onload = function(e) {
    document.querySelector('.fullscreen').style.backgroundImage = `url(${e.target.result})`;
    document.querySelector('.fullscreen').style.backgroundSize = 'cover'; 
  };
  reader.readAsDataURL(this.files[0]);
});


// Full screen button functionality
const fullscreenBtn = document.getElementById('fullscreenBtn');
const fullscreenSection = document.getElementById('fullscreen');
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    fullscreenSection.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
});








var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

//active btn
document.addEventListener("DOMContentLoaded", function() {
  // Trigger a click event on the .three button
  document.getElementById("customBtn").click();
});