self.onmessage = (ev) => {
	console.log("start message recieved from main script")

	
	if (ev.data === "start") {
		 sec = 1500;
		
		pomodoro = setInterval(() => {
		sec = sec-1;
        self.postMessage(sec);
		console.log("Tick, tick, posting sec message back to main script");

        if(sec <= 0){
			console.log("End pomodoro event triggered")
            clearInterval(pomodoro);
            self.postMessage("startBreak");
        };
        }, 1000)};
};


self.onmessage = (ev) => {
	console.log("reset message recieved from mainscript to worker script")
	if (ev.data === "reset") {
		clearInterval(pomodoro);
		self.postMessage("resetPomo");
		};
}
