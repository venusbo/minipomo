var pomodoro;
var ele = document.getElementById('pomodoro')
var ele1 = document.getElementById('statusPomodoro')
var ele2 = document.getElementById('dateTime')
var ele3 = document.getElementById('duration')


// function to background colour for better status visbility on second monitor during study/work
function changeBackground(backgroundColor) { 
    var elements = document.querySelectorAll("body, header, h2, p");
    elements.forEach(function(element) {
      element.style.background = backgroundColor;
    });
  }

// function starts countdown from 5 minutes then resets pomo
function startBreak(){
    sec = 300;
    changeBackground("#ec9595");
    pomodoro = setInterval(()=>{
        sec = sec-1;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60
        ele1.innerHTML = "break time ^_^"

        if(sec <= 0){
            reset();
        }
        }, 1000)}

function start(){ // start pomo
    sec = 1500;
    ele2.innerHTML = new Date(); // return current date/time to first data slot
    changeBackground("#95ecaf");
    pomodoro = setInterval(()=>{
        sec = sec-1;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60;
        ele1.innerHTML = "work/study :)";

        if(sec <= 0){
            clearInterval(pomodoro);
            startBreak();
        }
        }, 1000)}
        

function reset(){ // reset timer

    ele3.innerHTML = Math.floor((1500-sec)/60) + ":" + (1500-sec)%60; // returning duration of study to 'duration' table data

    clearInterval(pomodoro); // reset timer loop
    sec = 1500; // reset sec
    ele.innerHTML = "25" + ":" + "00" // initialise pomo starting postion
    changeBackground("#c795ec");
    ele1.innerHTML = "click start to begin your next study session"
    return;
}



(function(){ // main loop

    pomodoro = setInterval(()=>{0
    }, 1000)
    clearInterval(pomodoro);
    sec = 1500;
    ele.innerHTML = "25" + ":" + "00"
    ele1.innerHTML = "click start to begin study session"
    changeBackground("#c795ec");
    return;}

)()



