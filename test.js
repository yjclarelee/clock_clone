//alert("Trying to learn JS here.");

// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }
    // else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();

