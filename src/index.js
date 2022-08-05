//Variables
const timeContainer = document.querySelector("main");
let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
let hoursSpan = document.querySelector("#hours");
let hoursInput = document.querySelector("#timer-hour");
let minutesInput = document.querySelector("#timer-minute");
let secondsInput = document.querySelector("#timer-second");
let startButton = document.querySelector("#start-chrono");
let startButtonTimer = document.querySelector("#start-timer");
let continueButton = document.querySelector("#continue-timer");
let stopButton = document.querySelector("#stop-chrono");
let stopButtonTimer = document.querySelector("#stop-timer");
let currentButton;
let seconds = 0;
let minutes = 0;
let hours = 0;


//Start functions

const startChrono = () => {
    currentButton = event.target;
    currentButton.disabled = true;
    startButton.style.display = "none";
    stopButton.style.display = "block";
    currentInterval = setInterval(() => {
        seconds += 1;
        secondsSpan.textContent = textFormat(seconds);    
        if (seconds === 60) {
            seconds = 0;
            secondsSpan.textContent = textFormat(seconds);
            minutes += 1;
            minutesSpan.textContent = textFormat(minutes);
        }
        if (minutes === 60) {
            minutes = 0;
            minutesSpan.textContent = textFormat(minutes);
            hours += 1;
            hoursSpan.textContent = textFormat(hours);
        }
            
    }, 1000)
}

const startTimer = () => {
    event.preventDefault();
    currentButton = event.target;
    currentButton.disabled = true;
    const hoursValue = parseInt(event.target.hours.value);
    const minutesValue = parseInt(event.target.minutes.value);
    const secondsValue = parseInt(event.target.seconds.value);
    hoursSpan.textContent = textFormat(hoursValue);
    minutesSpan.textContent = textFormat(minutesValue);
    secondsSpan.textContent = textFormat(secondsValue);
    hours = hoursValue;
    minutes = minutesValue;
    seconds = secondsValue;
    startButtonTimer.textContent = "Continue";
    startButtonTimer.setAttribute("type", "button");
    startButtonTimer.setAttribute("onclick", "continueTimer()");
    startButtonTimer.style.display = "none";
    stopButtonTimer.style.display = "block";
    continueTime();
}

const continueTime = () => {
    currentInterval = setInterval(() => {
        if (seconds === 0 && minutes === 0 && hours === 0) {
            alert("The counter has finished");
            stopTime();
        }
        seconds -= 1;
        secondsSpan.textContent = textFormat(seconds);
        if (seconds === -1) {
            seconds = 59;
            secondsSpan.textContent = textFormat(seconds);
            minutes -= 1;
            minutesSpan.textContent = textFormat(minutes);
        }
        if (minutes === -1) {
            minutes = 59;
            minutesSpan.textContent = textFormat(minutes);
            hours -= 1;
            hoursSpan.textContent = textFormat(hours);
        }
    }, 1000)
}

const continueTimer = () => {
    startButtonTimer.style.display = "none";
    stopButtonTimer.style.display = "block";
    continueTime();
}

// Stop Functions

const stopTime = () => {
    currentButton.disabled = false;
    clearInterval(currentInterval);
    startButton.style.display = "block";
    stopButton.style.display = "none";
}

const stopTimer = () => {
    currentButton.disabled = false;
    clearInterval(currentInterval);
    startButtonTimer.style.display = "block";
    stopButtonTimer.style.display = "none";
}

//Reset Functions

const resetTime = () => {
    clearInterval(currentInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
    hoursSpan.textContent = "00";
    startButton.style.display = "block";
    stopButton.style.display = "none";  
}

const resetTimer = () => {
    clearInterval(currentInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
    hoursSpan.textContent = "00";
    startButtonTimer.textContent = "Start";
    startButtonTimer.setAttribute("type", "submit");
    startButtonTimer.removeAttribute("onclick");
    startButtonTimer.style.display = "block";
    stopButtonTimer.style.display = "none";
}

//Text functions

const textFormat = (num) => {
    if(Number.isNaN(num) === true) {
        return '00';
    }
    if (num < 10) {
        return `0${num}`;
    } else {
        return `${num}`;
    }
}



