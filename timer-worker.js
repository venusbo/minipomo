/*function whenActive(e) {
	var functionName=e.data.action;

	switch(functionName){
		case 'Reset':
			self.removeEventListener("message", whenActive);
			self.addEventListener("message", whenNotActive);
			// Stopping actions
		break;

	}
}

function whenNotActive(e) {
	var functionName=e.data.action;

	if(functionName === 'Start'){
		self.addEventListener("message", whenActive);
		self.removeEventListener("message", whenNotActive);
	}
}

//start the cycle
self.addEventListener("message", whenActive)

*/




self.onmessage = (ev) => {
	console.log("start message recieved from main script")
	
	if (ev.data === "reset") {
		console.log("reset message recieved from mainscript to javascript")
		sec = 1500; // reset sec to 25 min
		clearInterval(Start); // reset SetInterval

		};
	
	if (ev.data === "start") {
		 sec = 1500;
		Start = setInterval(() => {
		sec = sec-1;
        self.postMessage(sec);
		console.log("Tick, tick, posting sec message back to main script");
		console.log(sec);
	

        if(sec <= 0){
			console.log("End pomodoro event triggered")
            clearInterval()
            self.postMessage("startBreak");
        };
        }, 1000)};
};