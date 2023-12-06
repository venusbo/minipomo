self.onmessage = (ev) => {
	console.log("start message recieved from main script to timerworker2")
	
	if (ev.data === "reset") {
		console.log("reset message recieved from mainscript to timerworker2")
		sec = 0; // reset sec to 0
		clearInterval(timer); // reset SetInterval
		};

    if (ev.data === "pause"){
        console.log("pause message recieved from mainscript to timerworker2")
		sec = sec;
		clearInterval(timer);
		
    };
	
	if (ev.data === "start"){
         sec = sec;
        timer = setInterval(()=>{
		sec = sec + 1;
        self.postMessage(sec);
		console.log("Tick, tick, posting sec message back to main script");
		console.log(sec);
            
        }, 1000)
        return;
    };
};

