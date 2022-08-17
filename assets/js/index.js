const countdownDate = new Date("September 16, 2022 08:30:00").getTime();

let clock = document.getElementById("clockdiv");
let daysSpan = clock.querySelector(".days");
let hoursSpan = clock.querySelector(".hours");
let minutesSpan = clock.querySelector(".minutes");
let secondsSpan = clock.querySelector(".seconds");

let timeInterval = setInterval(function () {
  let currentTime = new Date().getTime();

  let timeLeft = countdownDate - currentTime;
});
