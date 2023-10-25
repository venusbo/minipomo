self.onmessage = (ev) => {
	console.log("start message recieved from main script")
	
	if (ev.data === "reset") {
		console.log("reset message recieved from mainscript to javascript")
		sec = 1500; // reset sec to 25 min
		clearInterval(Start); // reset SetInterval
		self.close(); // close worker
		};
	
	if (ev.data === "start") {
		 sec = 1500;
		
		Start = setInterval(() => {
		sec = sec-1;
        self.postMessage(sec);
		console.log("Tick, tick, posting sec message back to main script")
		
	

        if(sec <= 0){
			console.log("End pomodoro event triggered")
            clearInterval();
            self.postMessage("startBreak");
        };
        }, 1000)};
};