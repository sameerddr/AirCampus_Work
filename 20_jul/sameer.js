// A function is a block of code that performs the specific task
// return is used to return the value or notify the function to stop if nothing is return it defines the undefined 

let a = 3;
let b = 5;


function add() {
    let s = a;
    let q = b;
    return s + q;
}
console.log(add());

// function expressions (anonymous function) - when a function is defined inside the the variable is called function expression.

let x = function(num) {

    let res = num * num;
    return res;
}
console.log(x(2));

function sameer(params) {
    console.log("sameer");
}

sameer();
// let aa = 3;
// function add() {
//     bb = 2;
//     return aa + bb;
// }
// console.log(add())


// arrow function 
// 1- Not Compulsory To Use The Return 
// 2- No Need of function Keyword
// 3- If there are Only One Variable no need to use "{}" brackets



let xx = function(num) {
    return num * num;
}
console.log(xx(12));

let yy = (num) => num * num;
console.log(yy(12));

let sum = ((x, y) => x + y);
console.log(sum(2, 3));

let square = ((x, y) => x * y);
console.log(square(2, 3));

// let vote = (age < 18)
// // IIFE (Imeediately Invoked Function Expression) - It automatically called the function & if you want to make your variable private You can use it !
// Syntax -
//     (function() {
//         // Code Which You Want To Right
//     })();


(function(a, b) {
    return console.log(a + b);
})(100, 100);

let mull = (function(a, b) {
    return (a * b);
})(10, 20);
console.log(mull);