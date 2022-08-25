const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //console.log(toDos); //배열
  //localStorage에 저장할때는 문자열형태로 밖에 안됨
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //console.log(JSON.stringify(toDos)); //문자열
}

//삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  //array(배열에서) 지우고싶은 item을 제외하고 새 array(배열)을 만드는 함수인 filter
  toDos = toDos.filter((x) => x.id !== +li.id); //parseInt(li.id)
  saveToDos();
  li.remove();
}

//체크표시할 때 가운데 줄
function underline(event) {
  const li = event.target.parentElement;
  console.log(li);
  //console.log(toDos);
  let k;
  toDos.filter((x, index) => {
    if (x.id === +li.id) k = index;
  });
  //console.log(k);

  toDos[k].checkline = !toDos[k].checkline;
  //li.querySelector("span").addClass = "underline";
  li.querySelector("span").classList.toggle("underline");
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//li,span,button 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.className = "todoBox";
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.className = "todoListwidtControl";
  span.innerHTML = `${newTodo.text} `;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  const button2 = document.createElement("button");
  button2.innerHTML = "✔";
  button.className = "transparentButton";
  button2.className = "transparentButton2";
  button.addEventListener("click", deleteToDo);
  button2.addEventListener("click", underline);
  li.appendChild(span);
  li.appendChild(button2);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//li,span,button 추가
function paintToDo2(newTodo) {
  const li = document.createElement("li");
  li.className = "todoBox";
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.className = "todoListwidtControl";
  span.classList.add("underline");
  console.log(span);

  //span.className = "underline";
  span.innerHTML = `${newTodo.text} `;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  const button2 = document.createElement("button");
  button2.innerHTML = "✔";
  button.className = "transparentButton";
  button2.className = "transparentButton2";
  button.addEventListener("click", deleteToDo);
  button2.addEventListener("click", underline);
  li.appendChild(span);
  li.appendChild(button2);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//저장
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    checkline: false, //체크확인 이거어떻게할까
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //배열
  toDos = parsedToDos;
  console.log(toDos);
  //toDos.forEach(paintToDo);
  toDos.forEach((x) => {
    console.log(x);
    if (x.checkline === true) {
      paintToDo2(x);
    } else {
      paintToDo(x); //forEach는 배열의 원소 탐색, ex)paintToDo({text: 'a', id: 1660806856655}),{text: 'b', id: 1660806863613}
    }
  });
}
