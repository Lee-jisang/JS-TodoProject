function createElementNineToZero($el, type) {
  const $fragment = document.createDocumentFragment();
  for (let i = 9; i >= 0; i--) {
    const $span = document.createElement("span");
    $span.textContent = i;
    $fragment.appendChild($span);

    if (type === "hour1") {
    }
  }
  $el.appendChild($fragment);
}

document.querySelectorAll(".nine-to-zero").forEach(createElementNineToZero);

const h1s = document.querySelectorAll("#h1 span");
const h2s = document.querySelectorAll("#h2 span");
const m1s = document.querySelectorAll("#m1 span");
const m2s = document.querySelectorAll("#m2 span");
const s1s = document.querySelectorAll("#s1 span");
const s2s = document.querySelectorAll("#s2 span");

const clock2 = document.querySelector("h2#clock2");

function clock() {
  const date = new Date();
  const hor = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  const sec = ("0" + date.getSeconds()).slice(-2);

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  clock2.innerHTML = `${year} - ${month} - ${day}`;

  const h1 = Number(hor[0]);
  const h2 = Number(hor[1]);
  const m1 = Number(min[0]);
  const m2 = Number(min[1]);
  const s1 = Number(sec[0]);
  const s2 = Number(sec[1]);

  h1s.forEach(
    (span) => (span.style.transform = `translateY(-${(9 - h1) * 100}%)`)
  );
  h2s.forEach(
    (span) => (span.style.transform = `translateY(-${(9 - h2) * 100}%)`)
  );
  m1s.forEach(
    (span) => (span.style.transform = `translateY(-${(9 - m1) * 100}%)`)
  );
  m2s.forEach(
    (span) => (span.style.transform = `translateY(-${(9 - m2) * 100}%)`)
  );
  s1s.forEach(
    (span) => (span.style.transform = `translateY(-${(9 - s1) * 100}%)`)
  );
  s2s.forEach(
    (span) => (span.style.transform = `translateY(-${(9 - s2) * 100}%)`)
  );
}

clock();
setInterval(clock, 1000);
