const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
// console.log(clockContainer);
// console.log(clockTitle);

function setTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour}:${minute}:${second}`;
}

function init(){
    setTime(); 
}

init();