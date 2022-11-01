let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let input = document.querySelector(".input");

function incrementValue(){
    console.log("increment");
     input.value = parseInt(input.value) + 1;
}

function decrementValue(){
    console.log("decrement");
    input.value = parseInt(input.value) - 1;
}

add.addEventListener("click", incrementValue);
subtract.addEventListener("click", decrementValue);