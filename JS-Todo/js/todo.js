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
  button.className = "transparentButton";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
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
  toDos.forEach(paintToDo); //forEach는 배열의 원소 탐색, ex)paintToDo({text: 'a', id: 1660806856655}),{text: 'b', id: 1660806863613}
}
