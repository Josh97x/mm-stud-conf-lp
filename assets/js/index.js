// create date for countdown timer
const countdownDate = new Date("September 16, 2022 08:30:00").getTime();

// create variables to hold each span element and clockdiv container
let clock = document.getElementById("clockdiv");
let daysSpan = clock.querySelector(".days");
let hoursSpan = clock.querySelector(".hours");
let minutesSpan = clock.querySelector(".minutes");
let secondsSpan = clock.querySelector(".seconds");

// create function for timer using setInterval and create new instance of current time
let timeInterval = setInterval(function () {
  let currentTime = new Date().getTime();

  // create var to store the remainder of the current time subtracting the time left
  let timeLeft = countdownDate - currentTime;

  // logic for calculating time for days, hours, minutes & seconds
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // append those times to the span elements in the clock div
  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;

  // if timer reaches '0' display text to page
  if (timeLeft < 0) {
    clearInterval(timeInterval);
    clock.innerHTML = "EXPIRED";
  }
}, 1000);
