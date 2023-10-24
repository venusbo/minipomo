self.onmessage = function(startPomo) {
	console.log("message recieved from main script")
	if (ev.data === "start") {
		 sec = 1500;
		
		setInterval(() => {
		sec = sec-1;
        min = Math.floor(sec + sec/60);
        postMessage(sec);
		console.log("Tick, tick, posting sec message back to main script")

        if(sec <= 0){
			console.log("End pomodoro event triggered")
            clearInterval(pomodoro);
            postMessage("startBreak");
        }
        }, 1000)}
}