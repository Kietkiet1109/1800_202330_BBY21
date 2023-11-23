window.myTimer = null;

document.addEventListener("DOMContentLoaded", function () {
  const labelTimer = document.querySelector("#timer");

  window.countUpTimer = function () {
    let time = 0;
    window.myTimer = setInterval(function () {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);
      labelTimer.textContent = ` ${min}: ${sec}`;
      time++;
    }, 1000);
  };

  window.countUpTimer();
});
