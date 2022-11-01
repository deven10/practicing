let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let red = document.querySelector("#red");

let output = document.querySelector("#output");

function redColor(){
    output.style.color = "red";
};

red.addEventListener("click",redColor);

function blueColor(){
    output.style.color = "blue";
};

blue.addEventListener("click",blueColor);

function greenColor(){
    output.style.color = "green";
};

green.addEventListener("click",greenColor);





