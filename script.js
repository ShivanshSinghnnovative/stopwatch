let interval;
let startTime = 0;
let beforeStop;
let currentTime, hours, seconds, mili, minutes=0 , lapMinute , lapHours , lapmilisecond , lapSecond;
let arr = [];
let lapcurrentTime, lapstartTime;
const startStopButton = document.getElementById("startButton");
let count = 0;
function start() {
  if (startTime == 0) {
    startTime = Date.now();
    lapstartTime = Date.now();
    console.log(startTime);
  } else {
    startTime = Date.now() - (beforeStop - startTime);
    lapstartTime = Date.now() - (beforeStop - lapstartTime);
    console.log(startTime);
  }
  interval = setInterval(updateDisplay, 10);
  document.getElementById("startbutton").style.display = "none";
  document.getElementById("Stopbutton").style.display = "inline-block";
  document.getElementById("lapbutton").style.display = "inline-block";
}

function updateDisplay() {
  currentTime = Date.now() - startTime;
  lapcurrentTime = Date.now() - lapstartTime;

  hours = Math.floor(currentTime / 3600000);
  minutes = Math.floor((currentTime % 3600000) / 60000);
  seconds = Math.floor((currentTime % 60000) / 1000);
  mili = Math.floor((currentTime % 1000) / 10);

  lapHours = Math.floor(lapcurrentTime / 3600000);
  lapMinute = Math.floor((lapcurrentTime % 3600000) / 60000);
  lapSecond = Math.floor((lapcurrentTime % 60000) / 1000);
  lapmilisecond = Math.floor((lapcurrentTime % 1000) / 10);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (lapHours < 10) {
    lapHours = "0" + lapHours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (lapMinute < 10) {
    lapMinute = "0" + lapMinute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (lapSecond < 10) {
    lapSecond = "0" + lapSecond;
  }
  if (mili < 10) {
    mili = "0" + mili;
  }
  if (lapmilisecond < 10) {
    lapmilisecond = "0" + lapmilisecond;
  }
  document.getElementById("display").innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + mili;
}

function stop() {
  clearInterval(interval);
  beforeStop = Date.now();
  console.log(beforeStop);
  document.getElementById("startbutton").style.display = "inline-block";
  document.getElementById("Stopbutton").style.display = "none";
  document.getElementById("lapbutton").style.display = "none";
}

function reset() {
  clearInterval(interval);
  hours = 0, minutes = 0, seconds = 0, mili = 0;
  startTime = 0;
  document.getElementById("display").innerHTML =
    "0" + hours + ":" + "0" + minutes + ":" + "0" + seconds + ":" + "0" + mili;
  document.getElementById("startbutton").style.display = "inline-block";
  document.getElementById("Stopbutton").style.display = "none";
  document.getElementById("lapbutton").style.display = "none";
  document.getElementById("lapList").innerHTML = "";
  arr = [];
}

function lap() {
  lapstartTime = Date.now();
  let lapvalue =
    lapHours + ":" + lapMinute + ":" + lapSecond + ":" + lapmilisecond;

  arr.push(lapvalue);
  arr.reverse();
  console.log(arr);
  let lapsHTML = "";

  for (let i = 0; i < arr.length; i++) {
    lapsHTML += arr[i] + "<br>";
    count++;
  }

  arr.reverse();
  lapHours = 0;
  lapMinute = 0;
  lapSecond = 0;
  lapmilisecond = 0;
  lapsHTML.style = "coloumn-reverse";
  //   lapsHTML = document.getElementById("lapList").reverse();

  document.getElementById("lapList").innerHTML = lapsHTML;
}
