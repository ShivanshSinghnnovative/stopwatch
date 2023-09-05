let interval;
let startTime = 0;
let beforeStop;
let currentTime, hours, seconds, mili, minutes=0;
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

  LapHours = Math.floor(lapcurrentTime / 3600000);
  LapMinute = Math.floor((lapcurrentTime % 3600000) / 60000);
  LapSecond = Math.floor((lapcurrentTime % 60000) / 1000);
  Lapmilisecond = Math.floor((lapcurrentTime % 1000) / 10);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (LapHours < 10) {
    LapHours = "0" + LapHours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (LapMinute < 10) {
    LapMinute = "0" + LapMinute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (LapSecond < 10) {
    LapSecond = "0" + LapSecond;
  }
  if (mili < 10) {
    mili = "0" + mili;
  }
  if (Lapmilisecond < 10) {
    Lapmilisecond = "0" + Lapmilisecond;
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
    LapHours + ":" + LapMinute + ":" + LapSecond + ":" + Lapmilisecond;

  arr.push(lapvalue);
  arr.reverse();
  console.log(arr);
  let lapsHTML = "";

  for (let i = 0; i < arr.length; i++) {
    lapsHTML += arr[i] + "<br>";
    count++;
  }

  arr.reverse();
  LapHours = 0;
  LapMinute = 0;
  LapSecond = 0;
  Lapmilisecond = 0;
  lapsHTML.style = "coloumn-reverse";
  //   lapsHTML = document.getElementById("lapList").reverse();

  document.getElementById("lapList").innerHTML = lapsHTML;
}
