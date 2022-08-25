const num = document.querySelectorAll(".nine-to-zero");

//console.log(document.querySelectorAll("input"));
const input = document.querySelectorAll(".todoInput");

let mode = false;
function changeMode() {
  mode = !mode;
  if (mode) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    num.forEach((element) => (element.style.color = "white"));
    input.forEach((element) => (element.style.color = "white"));
    localStorage.setItem("bgColor", "black");
  } else {
    document.querySelector("body").style.backgroundColor = "rgb(232, 229, 229)";
    document.querySelector("body").style.color = "black";
    num.forEach((element) => (element.style.color = "black"));
    input.forEach((element) => (element.style.color = "black"));
    localStorage.setItem("bgColor", "white");
  }
  mode ? console.log(mode) : console.log(mode);
}
console.log(localStorage.getItem("bgColor"));

if (localStorage.getItem("bgColor") === "white") {
  localStorage.setItem("bgColor", "white");
} else {
  localStorage.setItem("bgColor", "black");
}
