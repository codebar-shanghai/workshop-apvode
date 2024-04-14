// event_loop.js
const first  = () => console.log("first");
const second = () => console.log("second (timeout)");
const third  = () => console.log("third (while loop)");

first();
// The global setTimeout() method sets a timer which
// executes a function or specified piece of code once
// the timer expires.
setTimeout(second, 0);

const startTime = new Date();
// endTime is 10ms later than startTime
const endTime   = new Date(startTime.getTime() + 10);

while (new Date() < endTime) {
	third();
}

