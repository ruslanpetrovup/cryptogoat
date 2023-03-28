const countdown = new Date("2023-12-31T23:59:59").getTime(); // задаем дату окончания отсчета в формате ГГГГ-ММ-ДДTЧЧ:ММ:СС
const daysTimer = document.getElementById("days");
const minutesTimer = document.getElementById("hours");
const secondsTimer = document.getElementById("minutes");

console.log("ok");
const interval = setInterval(function () {
  const now = new Date().getTime(); // текущее время
  const distance = countdown - now; // разница между датой окончания и текущим временем

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysTimer.innerHTML = days;
  minutesTimer.innerHTML = hours;
  secondsTimer.innerHTML = seconds;

  if (distance < 0) {
    // если время истекло, выводим сообщение
    clearInterval(interval);
    timer.innerHTML = "EXPIRED";
  }
}, 1000);
