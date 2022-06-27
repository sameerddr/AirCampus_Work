// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}

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

// Print Numbers From 1 to 5 Using Recursions

function numbers(b) {
    if (b == 6) {
        return;
    }
    console.log(b);
    numbers(b + 1);

}
numbers(1);

//  code to print a pattern using for loop

function printPattern(range) {
    for (var i = 1; i <= range; i++) {
        var str = "";
        for (var j = 1; j <= i; j++) {
            str += j + " ";
        }
        console.log(str);
    }
}
printPatter(8);

// code to calculate the sum of digits in a number

function digitSum(num) {
    var sum = 0;
    while (num != 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27

// finish ...less code due to exam