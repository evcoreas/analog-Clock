const HRHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr * 360/12) + (min * (360/60)/12);
let minPosition = (min*360/60) + (sec * (360/60)/60);
let secPosition = sec * 360/60;

function runAnalogClock() {
    hrPosition += (3/360);
    minPosition += (6/60);
    secPosition += 6;

    HRHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runAnalogClock, 1000);
