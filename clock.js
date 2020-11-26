const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function padZero(num){
    return num < 10 ? `0${num}` : num;
}

function setTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;
}

function init(){
    setTime();
    setInterval(setTime, 1000); 
}

init();