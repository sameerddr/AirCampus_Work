// Basic Syntax-------------->
// function recurse() {
//     // function code
//     recurse();
//     // function code
// }

// recurse();


// 1- program to count down numbers to 1

function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
// calculate the sum of n natural numbers
function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}


//   -----------------
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41


//   ----------------------
function multiply(a, b = 1) {
    return a * b;
}

multiply(5); // 5


// decimal to binary
function decimalTobinary(num) {
    if (num === 0) {
        return 0;
    } else {
        return (num % 2 + 10 * decimalTobinary(parseInt(num / 2)));
    }
}

var result4 = decimalTobinary(15);
console.log(result4);