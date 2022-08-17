const countdownDate = new Date("September 16, 2022 08:30:00").getTime();

let clock = document.getElementById("clockdiv");
let daysSpan = clock.querySelector(".days");
let hoursSpan = clock.querySelector(".hours");
let minutesSpan = clock.querySelector(".minutes");
let secondsSpan = clock.querySelector(".seconds");

let timeInterval = setInterval(function () {
  let currentTime = new Date().getTime();

  let timeLeft = countdownDate - currentTime;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(timeInterval);
    clock.innerHTML = "EXPIRED";
  }
}, 1000);
