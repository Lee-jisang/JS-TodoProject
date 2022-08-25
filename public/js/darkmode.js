const num = document.querySelectorAll(".nine-to-zero");

//console.log(document.querySelectorAll("input"));
const input = document.querySelectorAll(".todoInput");

const savedbgColor = localStorage.getItem("bgColor");
console.log(localStorage.getItem("bgColor"));

let mode;
if (savedbgColor === null) {
  localStorage.setItem("bgColor", "white");
  mode = false;
} else if (savedbgColor === "black") {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  num.forEach((element) => (element.style.color = "white"));
  input.forEach((element) => (element.style.color = "white"));
  document.querySelector("#darkMode").className = "dark-mode";
  mode = true;
} else if (savedbgColor === "white") {
  document.querySelector("body").style.backgroundColor = "rgb(232, 229, 229)";
  document.querySelector("body").style.color = "black";
  num.forEach((element) => (element.style.color = "black"));
  input.forEach((element) => (element.style.color = "black"));
  document.querySelector("#darkMode").className = "original-mode";
  mode = false;
}

//버튼 눌렀을때
function changeMode() {
  mode = !mode;

  if (mode) {
    document.querySelector("body").className = "transitionBgcolor";
    document.querySelector("#darkMode").className = "dark-mode";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
    num.forEach((element) => (element.style.color = "white"));
    input.forEach((element) => (element.style.color = "white"));
    localStorage.setItem("bgColor", "black");
  } else {
    document.querySelector("body").className = "transitionBgcolor";
    document.querySelector("#darkMode").className = "original-mode";
    document.querySelector("body").style.backgroundColor = "rgb(232, 229, 229)";
    document.querySelector("body").style.color = "black";
    num.forEach((element) => (element.style.color = "black"));
    input.forEach((element) => (element.style.color = "black"));
    localStorage.setItem("bgColor", "white");
  }

  console.log(mode);
}
