let add = document.querySelector("#add");
let sub = document.querySelector("#sub");

let output = document.querySelector("#output");
let label = document.querySelector("#label");

// label = output.value;
// let size = 18;
function incrementFontSize(){
    output.style.fontSize = "x-large";
};

add.addEventListener("click",incrementFontSize);

function decrementFontSize(){
    output.style.fontSize = "small";
};

sub.addEventListener("click", decrementFontSize);




