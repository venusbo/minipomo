self.onmessage = (ev) => {
	console.log("message recieved from main script")
	if (ev.data === "start") {
		 sec = 1500;
		
		setInterval((pomodoro) => {
		sec = sec-1;
        self.postMessage(sec);
		console.log("Tick, tick, posting sec message back to main script")
		
		if (ev.data === "reset") {
		console.log("reset message recieved from mainscript to javascript")
		clearInterval(pomodoro);
		};

        if(sec <= 0){
			console.log("End pomodoro event triggered")
            clearInterval(pomodoro);
            self.postMessage("startBreak");
        };
        }, 1000)}
};