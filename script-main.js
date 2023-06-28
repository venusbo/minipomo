var stopwatch;
var ele = document.getElementById("stopwatch");

function pause(){
    clearInterval(timer);
}

function start(){

    timer = setInterval(()=>{

        sec ++;
        min = Math.floor(sec/60);
        
        ele.innerHTML = min + ":" + sec%60
        
        }, 1000) // each 1 second
    }

function reset(){

    clearInterval(timer);
    
    sec = 0
    min = 0
    ele.innerHTML = min + ":" + sec%60
}

(function (){
    sec = 0;
    
    timer = setInterval(()=>{

        sec ++;
        min = Math.floor(sec/60);
        
        ele.innerHTML = min + ":" + sec%60
        
        }, 1000) // each 1 second
})()




