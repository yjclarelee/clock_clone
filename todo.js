const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TO_DO_LOCAL_STORAGE = "toDos";

function paintToDo(text){
    // can't you just append li without span?
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = `${text} `;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function saveToDo(){

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TO_DO_LOCAL_STORAGE);
    if (toDos){
        paintToDo(toDos);
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
