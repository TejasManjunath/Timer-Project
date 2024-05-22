
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




/*world clock*/

function startDigitalClock() {
    function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digital-clock').innerText = timeString;
    }
    
    // Update the clock every second
    setInterval(updateClock, 1000);
    
    // Initial call to display the clock immediately
    updateClock();
    }
    
    // Call the function to start the digital clock
    startDigitalClock();
            
    
    
    //world clock
    
    async function getUser(place) {
      const api_url = `api-url_Abstract-API `
      
      const response = await fetch(api_url);
      
      const data = await response.json();
      
      time = await data.datetime
      // arr = Array.from(time)
      // arr.splice(0, 11)
      // arr.toString()
      // timezone = (arr.splice(0, 5)).join("");
      document.getElementById("time2").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`
    
    }
    
    document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);
    e.addEventListener("mouseover", function () {
      window.onmousemove=function (j) {
          x = j.clientX
          y = j.clientY
          document.getElementById('name').style.top = y-60  + 'px'
          document.getElementById('name').style.left = x +10 + 'px'
      }
      const classes=e.className.baseVal.replace(/ /g, '.')         
      document.querySelectorAll(`.${classes}`).forEach(country =>{
          country.style.fill = "cyan"
      })
      document.getElementById("name").style.opacity = 1
      
      document.getElementById("namep").innerText = e.id
    })
    e.addEventListener("mouseleave", function () {
      const classes=e.className.baseVal.replace(/ /g, '.')
      document.querySelectorAll(`.${classes}`).forEach(country =>{
          country.style.fill = "#ececec"
      })
      document.getElementById("name").style.opacity = 0
    })
    
    e.addEventListener("click",function(){
      getUser(e.id)
    })
    
    })
