let secondselapsed=0;
let interval=null;
const time=document.getElementById("time");

function padding(value); {
    return String(value).padStart(2,"0")
}

function settime() {
    const minutes=Math.floor(secondselapsed/60)
    const seconds=secondselapsed%60
    time.innerHTML=`${padding(minutes)}:${padding(seconds)}`;
}

function timer() {
    secondselapsed=secondselapsed+1
    settime();
}

function startclock() {
    if (interval) stopclock();
    interval=setInterval(timer,1000);
}

function stopclock() {
    clearInterval(interval)
}

function resetclock() {
    stopclock()
    secondselapsed=0
    settime()
}