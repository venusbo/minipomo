var pomodoro;
var ele = document.getElementById('pomodoro')


function startBreak(){
    sec = 300;
    document.querySelector("body","header","h2","p").style.background = "#ec9595"
    pomodoro = setInterval(()=>{
        sec = sec-1;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60
    }, 1000)}

function start(){
    sec = 1500;
    document.querySelector("body","header","h2","p").style.background = "#95ecaf"
    pomodoro = setInterval(()=>{
        sec = sec-1;
        min = Math.floor(sec/60);
        ele.innerHTML = min + ":" + sec%60
        if(sec <= 0){
            clearInterval(pomodoro);
            startBreak();
        }
        }, 1000)}


function reset(){
    
    clearInterval(pomodoro);
    sec = 1500;
    ele.innerHTML = "25" + ":" + "00"
    document.querySelector("body","header","h2","p").style.background = "#c795ec"
    return;
}


(function(){

    pomodoro = setInterval(()=>{0
    }, 1000)
    clearInterval(pomodoro);
    sec = 1500;
    ele.innerHTML = "25" + ":" + "00"
    document.querySelector("body","header","h2","p").style.background = "#c795ec"
    return;}

)()
