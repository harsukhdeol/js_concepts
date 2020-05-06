/*
setTimeout - run a function once after the interval of time.
setInterval -run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
 */

function sayHi(name) {
    console.log("hi," + name)
}
//setTimeout(sayHi, 1000, "sukh");
//setTimeout(sayHi(), 1000, "sukh"); // brakets after fxn runs it and passes result to setTimeout (result is undefined)

let timer = setTimeout(() => console.log("delayed response"), 2000);//doesn't run bc of clearTimeout
//console.log(timer);//timeout object
//Cancel setTimout
clearTimeout(timer)

/* let intervalTimer = setInterval(sayHi, 2000, "harsukh");
//starts counting time passed from when fxn is called, not when it finishes executing
setTimeout(() => {
    clearInterval(intervalTimer);
    console.log("interval timer stopped");
}, 8000) //need to clear Interval or it will go on forever
 */

//Nested setTimeout
let nestedTimer = setTimeout(function tick() {
    console.log('tick');
    nestedTimer = setTimeout(tick, 2000)
}, 2000)

setTimeout(() => clearTimeout(nestedTimer), 8000)
//everytime tick is called, creates a new setTimeout for tick
//starts counting time after function executes

/*
RequestAnimationFrame
- executes code on next available screen repaint - in sync with user's browser and hardware
- pauses animation when tab not active
- basically nested setTimeout
*/
var reqAnim;
function doSmth() {
    //animation logic
    reqAnim = requestAnimationFrame(doSmth)
}
setTimeout(() => cancelAnimationFrame(reqAnim), 2000) //cancel animation after delay