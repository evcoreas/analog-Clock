const HRHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

// place the script in a function in order for the clock to run at a given interval
// instead of reloading the page
function runAnalogClock() {
  var date = new Date();
  console.log(date);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

  let hrPositon = (hr * 360/12) + (min * (360/60) / 12);
  let minPosition = (min * 360/60) + (sec * (360/60) / 60);
  let secPosition = sec * 360/60;

  HRHAND.style.transform = "rotate(" + hrPositon + " deg)";
  MINHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runAnalogClock, 1000);
