const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());

const clock = document.querySelector("h2#clock2");

function getClock() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  clock.innerHTML = `${year}:${month}:${day}`;
}
getClock();
