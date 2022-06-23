  // Normal Function 


  // Function Declartion 

  //   function functionName(parameters) {
  //     // code to be executed
  //   }
  //    1 Style
  //   function myFunction(a, b) {
  //       return console.log(a * b);
  //   }
  //   myFunction(2, 5);

  // 2 Style
  //   function myFunction(a, b) {
  //       return (a * b);
  //   }
  //   console.log(myFunction(2, 5));


  // 3 Style
  //   function myFunction(x, y = 2) {
  //       return x * y;
  //   }
  //   console.log(myFunction(4));

  // Arrow Function 
  // 1- Not Compulsory To Use The Return,Remove the body braces and word "return" -- the return is implied.
  // 2- No Need of function Keyword ,  Remove the word "function" and place arrow between the argument and opening body bracket
  // 3- If there are Only One Variable no need to use "{}" brackets



  // 1 &n 2 Point Expalained



  let myFunction = (a, b) => {
      console.log(a * b);
  }
  myFunction(20, 3);






  // let mul = (x, y) => {
  //     // console.log(x * y);
  //     return x * y;
  // };
  // let value = mul(2, 3);
  // console.log(value);




  // // 3 Point Explained
  let myFunctionn = (a, b) =>
      console.log(a * b);

  myFunctionn(20, 3);

  // // Types Of Functions
  // // 1- First Class Function - We can assign The function in the variable and can call it 
  // // 2 - Higher Order Function - In which Function Is Passed As a Parameter or   a function can return a function
  // // 3 - First Order Function - In which no argument passed & dont have a return type


  // // 1 Point Explained 
  let sameer = function() {
      console.log("Sameer Is here");
  }
  sameer();

  // // 2 Point Explained
  function x(para) {
      // para();
  }

  function y() {
      console.log("Aree Bhai, Padhai Par Dhyan Laga");
  }

  x(y);

  // // Here x is a higher Order function & y is a Call Back Function 

  // // 3 Point Explained
  function first_order(x) {
      console.log("it is first order function");
  }
  first_order();

  // // IIFE (Imeediately Invoked Function Expression) - It automatically called the function & if you want to make your variable private You can use it !
  // Syntax -
  //     (function() {
  //         // Code Which You Want To Right
  //     })();

  let value1 = (function varshney() {
      console.log("Need To Work Smart Not Hard");
  })
  value1();

  // (function ddr() {
  //     var a = 11;
  //     console.log(a);
  // })();
  // console.log(a);  here we cant acess the value of the "a"

  // // Function Recursion  --->