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
let roundsInput = document.getElementById('rounds');
        let workDurationInput = document.getElementById('workDuration');
        let restDurationInput = document.getElementById('restDuration');
        let startBtn = document.getElementById('start');
        let pauseBtn = document.getElementById('pause');
        let resetBtn = document.getElementById('reset');
        let timer;
        let isPaused = false;
        let isRest = false;
        let rounds = 0;
        let currentRound = 0;
        
        


        function startTimer() {
            rounds = parseInt(roundsInput.value);
            let totalWorkSeconds = parseInt(workDurationInput.value);
            let totalRestSeconds = parseInt(restDurationInput.value);
            
            function playSound() {
                // Replace this with your desired sound file path
                let sound = new Audio('./beep.mp3');
                sound.play();
            }
            
            function countdown() {
                
                if(currentRound <=rounds){
                    if (!isPaused) {
                        if (isRest) {
                            document.getElementById('timerMessage').innerText = 'Rest';
                            if (totalRestSeconds === 4 || totalRestSeconds === 3 || totalRestSeconds === 2) {
                                playSound();
                            }
                            if (totalRestSeconds <= 0) {
                                totalRestSeconds = parseInt(restDurationInput.value);
                                isRest = false;
                                currentRound++;
                                document.getElementById('timerMessage').innerText = 'Workout';
                            }
                            totalRestSeconds--;
                        } else {
                            document.getElementById('timerMessage').innerText = 'Workout';
                            if (totalWorkSeconds === 4 || totalWorkSeconds === 3 || totalWorkSeconds === 2) {
                                playSound();
                            }
                            if (totalWorkSeconds <= 0) {
                                totalWorkSeconds = parseInt(workDurationInput.value);
                                isRest = true;
                                document.getElementById('timerMessage').innerText = 'Rest';
                            }
                            totalWorkSeconds--;
                        }
                        document.getElementById('minutes').innerText = Math.floor(isRest ? totalRestSeconds / 60 : totalWorkSeconds / 60);
                        document.getElementById('seconds').innerText = isRest ? totalRestSeconds % 60 : totalWorkSeconds % 60;
                        
                        if (currentRound >= rounds * 1) {
                            clearInterval(timer);
                        }
                        
                    }
                }else{
                    return;
                }
            }
            
            timer = setInterval(countdown, 1000);
        }
        
    

        startBtn.addEventListener('click', startTimer);
        
        pauseBtn.addEventListener('click', function() {
            isPaused = !isPaused;
        });
        
        resetBtn.addEventListener('click', function() {
            clearInterval(timer);
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            document.getElementById('timerMessage').innerText = 'Start';
            isPaused = false;
            isRest = false;
            currentRound = 0;
            return;
        });





        