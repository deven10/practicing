let load = document.querySelector("#load");
let reload = document.querySelector("#reload");
let label = document.querySelector("#label");



load.addEventListener("click", function screenLoaded(){
    label.style.display = "none";
    load.style.display = "none";
    reload.style.display = "block";
});

reload.addEventListener("click", function reloadScreen(){
    label.style.display = "block";
    load.style.display = "block";
    reload.style.display = "none";
});

