var timer;
var ele = document.getElementById('timer');
var timerOn = Boolean()

function pause(){
    document.querySelector("body","header","h2","p").style.background = "#ec9595"
    clearInterval(timer);
    return;
}

function start(){
    document.querySelector("body","header","h2","p").style.background = "#95ecaf"
    timer = setInterval(()=>{
        sec ++;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60
    }, 1000)
    return;
}

function reset(){

    sec = 0;
    min = 0;
    ele.innerHTML = min + ":" + sec%60
    document.querySelector("body","header","h2","p").style.background = "#c795ec"
    return;
}

(function(){
    sec = 0
    document.querySelector("body","header","h2","p").style.background = "#95ecaf"
        timer = setInterval(()=>{
            sec ++;
            min = Math.floor(sec/60);
            ele.innerHTML = min +":"+ sec%60
        }, 1000)}

)()


