// function for factoring time remaining for days, hours, min & sec
function totalTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  // returning those totals here
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

// intitialing clock countdown -> targeting html classes
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  // create function for updating clock with correct time
  function updateClock() {
    const t = totalTimeRemaining(endtime);

    // adding html for days, hours, min & sec (if < 10 add '0' to time)
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    // if total time left is less than or = 0 STOP timer
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  // declaring var for timer (setting interval for 1000 milliseconds counting down)
  const timeinterval = setInterval(updateClock, 1000);
}

// declaring hard date / parsing that date and creating new one / counting down from 30 days
let endDate = "September 16 2022";
endDate = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);

// calling function that takes an 'ID' and var for end date
initializeClock("clockdiv", endDate);
