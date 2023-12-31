var pomodoro;
var ele = document.getElementById('pomodoro');
var ele1 = document.getElementById('statusPomodoro');
var ele2 = document.getElementById('dateTime');
var ele3 = document.getElementById('duration');
var startButton = document.getElementById('start');
var titleElement = document.getElementById("title");

var timerWorker = new Worker ('timer-worker.js');




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
    pomodoro = setInterval(function() {
        sec = sec-1;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60
        ele1.innerHTML = "break time ^_^"


        if(sec <= 0){
            reset();
        }
        }, 1000)}



function start(){ // start pomo
    worker0 = new Worker ("timer-worker.js")
    console.log("start pomo sequence initiated")
    ele2.innerHTML = new Date(); // return current date/time to first data slot
    changeBackground("#95ecaf");
    startPomodoro();
    
}

timerWorker.onmessage = (ev) => {
    if (ev.data === "startBreak") {
    startBreak();
    console.log ("start break message recieved from Worker");
}
};


function startPomodoro(){
    console.log("sending message to timer-worker.js to start timer")
    timerWorker.postMessage("start");
};


timerWorker.onmessage = (ev) => {
    if (ev.data = sec) {
        printPomodoro();
    };
};

function printPomodoro(){
    console.log("calculations recieved from worker, printing them now")
    timerWorker.onmessage = function(startPomo) {
        const sec = `${startPomo.data}`;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60;
        ele1.innerHTML = "work/study :)";
        titleElement = min + ":" + sec%60;

        if(sec <= 0){
			console.log("End pomodoro and start break event triggered")
			sec = 1500;
            startBreak();
        };
    };
};

function reset(){ // reset timer
    console.log("reset function initialised");
    timerWorker.postMessage("reset");
    ele3.innerHTML = Math.floor((1500-sec)/60) + ":" + (1500-sec)%60; // returning duration of study to 'duration' table data
    ele.innerHTML = "25" + ":" + "00" // initialise pomo starting postion
    changeBackground("#c795ec");
    ele1.innerHTML = "click start to begin your next study session"
    return;
};



(function(){ // main loop

    pomodoro = setInterval(function() {0
    }, 1000)
    clearInterval(pomodoro);
    sec = 1500;
    ele.innerHTML = "25" + ":" + "00"
    ele1.innerHTML = "click start to begin study session"
    changeBackground("#c795ec");
    return;}

    
)()