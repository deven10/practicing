let add = document.querySelector("#add");
let sub = document.querySelector("#sub");

let output = document.querySelector("#output");

let size = 18;
function incrementFontSize(){
    size = size + 2;
    output.style.fontSize = `${size}px`;
};

add.addEventListener("click",incrementFontSize);

function decrementFontSize(){
    size = size - 2;
    output.style.fontSize = `${size}px`;
};

sub.addEventListener("click", decrementFontSize);




