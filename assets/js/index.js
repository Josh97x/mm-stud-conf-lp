// date for countdown timer
const countdownDate = new Date("September 16, 2022 08:30:00").getTime();

// variables to hold each span element and clockdiv container
let clock = document.getElementById("clockdiv");
let daysSpan = clock.querySelector(".days");
let hoursSpan = clock.querySelector(".hours");
let minutesSpan = clock.querySelector(".minutes");
let secondsSpan = clock.querySelector(".seconds");

// function for timer using setInterval and create new instance of current time
let timeInterval = setInterval(function () {
  let currentTime = new Date().getTime();

  // logic to store the remainder of the current time and time left
  let timeLeft = countdownDate - currentTime;

  // logic for calculating time for days, hours, minutes & seconds
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // logic for appending times to the span elements in the clock div
  daysSpan.innerHTML = ("0" + days).slice(-2);
  hoursSpan.innerHTML = ("0" + hours).slice(-2);
  minutesSpan.innerHTML = ("0" + minutes).slice(-2);
  secondsSpan.innerHTML = ("0" + seconds).slice(-2);

  // if timer reaches '0' display text to page
  if (timeLeft < 0) {
    clearInterval(timeInterval);
    clock.innerHTML = "EXPIRED";
  }
}, 1000);
