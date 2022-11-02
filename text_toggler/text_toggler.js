let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
let h3 = document.querySelector("#h3");
let output = document.querySelector("#output");

h1.addEventListener("click", function convertToH1(){
    console.log(output.value);
    let size = 32;
    output.style.fontSize = `${size}px`;
    output.style.fontWeight = "bolder";
});

h2.addEventListener("click", function convertToH2(){
    let size = 24;
    output.style.fontSize = `${size}px`;
    output.style.fontWeight = "bolder";
});

h3.addEventListener("click", function convertToH3(){
    let size = 18.72;
    output.style.fontSize = `${size}px`;
    output.style.fontWeight = "bolder";
});


//     output.innerHTML = `<h2>${output.value}</h2>`
// });

// h3.addEventListener("click", function convertToH3(){
//     output.innerHTML = `<h3>${output.value}</h3>`
// });



