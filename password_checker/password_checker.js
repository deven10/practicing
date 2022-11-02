let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

let length;

input.addEventListener("input", function checkPasswordLength(e){
    let letter = e.target.value;
    length = letter.length;
    console.log(length, letter);
    if(length >= 10){
        btn.style.display = "block";
        input.style.backgroundColor = "green";
        output.style.backgroundColor = "green";
    } else{
        btn.style.display = "none";
        input.style.backgroundColor = "transparent";
        output.style.backgroundColor = "transparent";
    }
});

btn.addEventListener("click", function checkPasswordStrength(){
    console.log(length);
if(length >= 10){
        output.value = "Strong Password 💪";
    } else{
        output.value = "Weak Password 👎";
    }
});

