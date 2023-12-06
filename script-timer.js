var timer;
var ele = document.getElementById('timer');

var timerWorker2 = new Worker ("timer-worker2.js")



// function to background colour for better status visbility on second monitor during study/work
function changeBackground(backgroundColor) {
    var elements = document.querySelectorAll("body, header, h2, p");
    elements.forEach(function(element) {
      element.style.background = backgroundColor;
    });
  }

function pause(){
    console.log("sending message to timer-worker2.js to pause timer")
    timerWorker2.postMessage("pause")
    changeBackground("#ec9595");
};


// function starts countup from 00:00
function start(){ // start timer

    worker0 = new Worker ("timer-worker2.js")
    console.log("start timer sequence initiated");
    changeBackground("#95ecaf");
    startTimer();
};


function startTimer(){
    console.log("sending message to timer-worker2.js to start timer")
    timerWorker2.postMessage("start");
};

timerWorker2.onmessage = (ev) => {
    console.log("sec recieved from timerWorker2.js")
    if (ev.data = sec) {
        printTimer();
    };
};

function printTimer(){
    console.log("calculations recieved from worker, printing them now")
    timerWorker2.onmessage = function(startTimer) {
        const sec = `${startTimer.data}`;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60;
    };
};


function reset(){ // reset timer
    console.log("Timer reset sequence initiated")
    timerWorker2.postMessage("reset")
    ele3.innerHTML = Math.floor((sec)/60) + ":" + (sec)%60; // returning duration of study to 'duration' table data
    ele.innerHTML = "00" + ":" + "00"
    changeBackground("#c795ec"); 
    return;
};

function resume(){
    console.log("Resume sequence initiated")
    timerWorker2.postMessage("resume")
}

(function(){ // main loop

    pomodoro = setInterval(function() {0
    }, 1000)
    clearInterval(pomodoro);
    sec = 0;
    ele.innerHTML = "00" + ":" + "00"
    ele1.innerHTML = "click start to begin study session"
    changeBackground("#c795ec");
    return;}

    
)()