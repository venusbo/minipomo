var timer;
var ele = document.getElementById('timer');

var timerWorker2 = new Worker ("timer-worker2.js")

function changeBackground(backgroundColor) {
    var elements = document.querySelectorAll("body, header, h2, p");
    elements.forEach(function(element) {
      element.style.background = backgroundColor;
    });
  }

function pause(){
    changeBackground("#ec9595");
    clearInterval(timer);
    return;
}

function start(){
    changeBackground("#95ecaf");
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
        ele1.innerHTML = "How long can you stay concentrated for? :)";
    };
};

function reset(){
    console.log("Timer reset sequence initiated")
    timerWorker2.postMessage("reset")
    sec = 0;
    min = 0;
    ele.innerHTML = min + ":" + sec%60
    changeBackground("#c795ec");
    return;
};

(function(){

    timer = setInterval(()=>{0
    }, 1000)
    clearInterval(timer);
    sec = 0;
    ele.innerHTML = "00" + ":" + "00"
    changeBackground("#c795ec");
    return;}

)()