let interval;
let startTime = 0;
let beforeStop;
let currentTime, hours, seconds, mili, minutes;
let arr = [];
let lapcurrentTime, lapstartTime;
const startStopButton = document.getElementById("startButton");
let count =0;
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

  h1 = Math.floor(lapcurrentTime / 3600000);
  m1 = Math.floor((lapcurrentTime % 3600000) / 60000);
  s1 = Math.floor((lapcurrentTime % 60000) / 1000);
  mili1 = Math.floor((lapcurrentTime % 1000) / 10);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (h1 < 10) {
    h1 = "0" + h1;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (m1 < 10) {
    m1 = "0" + m1;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (s1 < 10) {
    s1 = "0" + s1;
  }
  if (mili < 10) {
    mili = "0" + mili;
  }
  if (mili1 < 10) {
    mili1 = "0" + mili1;
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
  (h = 0), (m = 0), (s = 0), (mili = 0);
  startTime = 0;
  document.getElementById("display").innerHTML =
    "0" + h + ":" + "0" + m + ":" + "0" + s + ":" + "0" + mili;
  document.getElementById("startbutton").style.display = "inline-block";
  document.getElementById("Stopbutton").style.display = "none";
  document.getElementById("lapbutton").style.display = "none";
  document.getElementById("lapList").innerHTML = "";
  arr = [];
}

function lap() {
  lapstartTime = Date.now();
  let lapvalue = h1 + ":" + m1 + ":" + s1 + ":" + mili1;
 
  arr.push(lapvalue);
  arr.reverse();
  console.log(arr);
  let lapsHTML = "";
  
  for (let i = 0; i < arr.length; i++) {
    lapsHTML += arr[i] + "<br>";
    count++;
  }

 arr.reverse();
  h1 = 0;
  m1 = 0;
  s1 = 0;
  mili1 = 0;
  lapsHTML.style="coloumn-reverse";
//   lapsHTML = document.getElementById("lapList").reverse();

  document.getElementById("lapList").innerHTML = lapsHTML;
}
