// const title = document.querySelector(".title"); //querySelector
// const h2 = document.querySelector(".hello h2");

// function handleTitle() {
//   title.classList.toggle("active");
// }
// title.addEventListener("click", handleTitle);

// let clickMode = false;
// function clickEvent() {
//   clickMode = !clickMode;
//   clickMode ? (h2.className = "active") : (h2.className = "");
// }
// h2.addEventListener("click", clickEvent);

let mode = false;
function changeMode() {
  mode = !mode;
  if (mode) {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
  }
  mode ? console.log(mode) : console.log(mode);
}

const loginForm = document.querySelector("#login-form"); // document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const nameChangeButton = document.querySelector("#change-name");
const HIDDEN_CLASSNAME = "hidden";

//유저가 이름을 입력했을때 실행
function onLoginsubmit(event) {
  event.preventDefault(); //이벤트의 기본행동, 브라우저의 기본동작을 막아줌
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  paintGreetings(userName);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  nameChangeButton.classList.toggle(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${username}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  //유저가 이름을 입력안했을때
  loginForm.classList.toggle(HIDDEN_CLASSNAME);

  loginForm.addEventListener("submit", onLoginsubmit); //addEventListener의 함수는 브라우저가 실행하는 함수임, 사용자가 submit이라는 행동할때 실행되는 것임
} else {
  //유저가 이름을 입력했을때,
  paintGreetings(savedUsername);
}

// console.log(savedUsername);

function nameChange() {
  localStorage.removeItem("username");
  window.location.reload();
}
