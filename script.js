const HRHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

let hrPositon = 10;
let minPosition = 180;
let secPosition = 250;

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

HRHAND.style.transform = "rotate(" + hrPositon + " deg)";
MINHAND.style.transform = "rotate(" + minPosition + "deg)";
SECHAND.style.transform = "rotate(" + secPosition + "deg)";
