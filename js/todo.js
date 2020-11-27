const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

// key value of local storage
const TO_DO_LOCAL_STORAGE = "toDos";

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // Don't understand this part yet
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    // JSON stringify changes a javscript object to a string
    localStorage.setItem(TO_DO_LOCAL_STORAGE, JSON.stringify(toDos));
}

function paintToDo(text){
    // can't you just append li without span?
    // span is a container to put the text into
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1 ;
    delBtn.innerText = "❌";
    // Why is eventListener here?
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = `${text} `;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    // check what the function of the next line is
    event.preventDefault();
    // paint the input value
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // remove the text after input
    toDoInput.value = "";
}

function loadToDos(){
    // if todo exists, show it
    const loadedToDos = localStorage.getItem(TO_DO_LOCAL_STORAGE);
    if (loadedToDos){
        // parse the strings to get an object
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
