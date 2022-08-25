const clock = document.querySelector("h2#clock2");

function getClock() {
  const date = new Date();
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
