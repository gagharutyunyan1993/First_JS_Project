function timer() {
  let deadline = "2019-12-24";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));
    // hours = Math.floor((t/1000/60/60)%24);
    // days = Math.floor((t/(1000*60*60*24)));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = formatTime(t.hours);
      minutes.textContent = formatTime(t.minutes);
      seconds.textContent = formatTime(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "0";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }

    function formatTime(time) {
      if (time < 10) {
        time = "0" + time;
      }
      return time;
    }
  }

  // adding word ('day')
  // function formatDays(day) {
  //   let sb = '',
  //     dayNew = day % 100,
  //     lastFigure = dayNew % 10;
  //   if (dayNew > 10 && dayNew < 20) {
  //     sb = 'ей';
  //   } else if (lastFigure == 1) {
  //     sb = "day";
  //   } else if (lastFigure > 1 && lastFigure < 5) {
  //     sb = 'days';
  //   } else {
  //     sb = 'days';
  //   }
  //   return sb;
  // }

  setClock("timer", deadline);
}

module.exports = timer;