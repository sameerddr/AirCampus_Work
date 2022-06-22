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

    // First Class Function
    // 1- We can assign The function in the variable and can call it 
    // 2 - Higher Order Function - In which Fuction Is Passed As a Parameter
    // 3 - First Order Function - In which no argument passed &dont have a return type


    // 1 Point Explained 
    let sameer = function() {
        console.log("Sameer Is here");
    }
    sameer();

    // 3 Point Explained
    function first_order(x) {
        console.log("it is first order function");
    }
    first_order();

    // 2 Point Explained