const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser";
const SHOWING_CLASS_NAME = "showing";

function saveName(text){
    localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event){
    // check later why event.preventDeault() is needed
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    // why is SHOWING_CLASS_NAME used?
    form.classList.add(SHOWING_CLASS_NAME);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    // why is SHOWING_CLASS_NAME used?
    form.classList.remove(SHOWING_CLASS_NAME);
    greetings.classList.add(SHOWING_CLASS_NAME);
    greetings.innerText = `Hello, ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
    if(currentUser){
        paintGreeting(currentUser);
    }
    else{
        askForName();
    }
}

function init(){
    loadName();
}
init();