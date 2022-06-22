    // Arrow Function 
    // 1- Not Compulsory To Use The Return 
    // 2- No Need of function Keyword
    // 3- If there are Only One Variable no need to use "{}" brackets



    // 1 &n 2 Point Expalained
    let mul = (x, y) => {
        console.log(x * y);
    };
    mul(2, 3);

    // 3 Point Explained
    let mult = a => console.log(a * a);
    mult(4);

    // Types Of Functions
    // 1- First Class Function - We can assign The function in the variable and can call it 
    // 2 - Higher Order Function - In which Function Is Passed As a Parameter or   a function can return a function
    // 3 - First Order Function - In which no argument passed &dont have a return type


    // 1 Point Explained 
    let sameer = function() {
        console.log("Sameer Is here");
    }
    sameer();

    // 2 Point Explained
    function x(para) {
        para();
    }

    function y() {
        console.log("Hello Bhai, Padhai Par Dhyan Laga");
    }

    x(y);

    //  Here x is a higher Order function & y is a Call Back Function 

    // 3 Point Explained
    function first_order(x) {
        console.log("it is first order function");
    }
    first_order();

    // IIFE (Imeediately Invoked Function Expression) - It automatically called the function & if you want to make your variable private You can use it !
    // Syntax -
    //     (function() {
    //         // Code Which You Want To Right
    //     })();

    (function varshney() {
        console.log("Kl Exam hai Php Ka");
    })();

    (function ddr() {
        var a = 11;
        console.log(a);
    })();
    // console.log(a);  here we cant acess the value of the "a"

    // Function Recursion