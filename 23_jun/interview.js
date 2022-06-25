//  1- First Class Function - We can assign The function in the variable and can call it variable
//   2 - Higher Order Function - In which Function Is Passed As a Parameter or   a function can return a function


// 1 Point Explained 
let sameer = function() {
    console.log("Sameer Is here");
}
sameer(); // Invoke it using the variable sameer

let amit = function() {
    console.log("Amit Bhai SO GAye ");
}

amit();

// Note: Even if your function was named, you can use the variable name to invoke it.(By MDN)

let same = function() {
    console.log("Amit BHai is Best");
}
same();


// 2 Point Explained

function x(para) {
    // para();
}

function y() {
    console.log("Aree Bhai, Padhai Par Dhyan Laga");
}

x(y);

function a(q) {
    console.log("Sameer concept clear kr thode orr");
    q();

}

function b() {
    console.log("Everything Is Fine");
}
a(b);

// Here x is a higher Order function & y is a Call Back Function