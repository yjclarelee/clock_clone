const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    //jpeg images don't work because the bottom line is jpg
    image.src = `src/${imgNumber+1}.jpg`;
    //want to use the bottom line but don't know async
    let doneLoading = HTMLImageElement.complete;
    image.classList.add("backgroundImage");
    body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random()*IMAGE_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();