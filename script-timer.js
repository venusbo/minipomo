var timer;
var ele = document.getElementById('timer');


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
    changeBackground("#c795ec");
    return;
}

(function(){

    timer = setInterval(()=>{0
    }, 1000)
    clearInterval(timer);
    sec = 0;
    ele.innerHTML = "00" + ":" + "00"
    changeBackground("#c795ec");
    return;}

)()