let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let output = document.querySelector("#output");


add.addEventListener("click", function adding(){
    output.value = parseInt(inputOne.value) + parseInt(inputTwo.value);
});
sub.addEventListener("click", function subtracting(){
    output.value = parseInt(inputOne.value) - parseInt(inputTwo.value);
});
multiply.addEventListener("click", function multiplying(){
    console.log("multiplying");
    output.value = parseInt(inputOne.value) * parseInt(inputTwo.value);
});
divide.addEventListener("click", function dividing(){
    console.log("dividing");
    output.value = parseInt(inputOne.value) / parseInt(inputTwo.value);
});

