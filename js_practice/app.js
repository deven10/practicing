

// function x(){
//     // if(true){
//     var b = 1000;
//     console.log("inside 1 if");
//     // console.log("c",c);

//     function a(){
//         // if(true){
//             var c = 1;
//             console.log(b);
//             console.log("inside 2 if");
//             return c;
//     // }
//     }
//     a();
//     console.log("c = ",c);
// }
// // }

// x();
// let  a = 5;
// {
//     let a = 10;
//     console.log(`${a} <= A`);
// }
// console.log(`${a} <= A`);

function x(){
    let a = 5;
    function y(){
        console.log(a);
    }
    return y;
}

let z = x();
// console.log(x);
z();
