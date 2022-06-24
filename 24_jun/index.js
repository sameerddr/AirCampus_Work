//   Recursion = when a function Calls Itself Again & Again 
//                            -- -- > Loops
//                            -- -- > Functions

//   Q1 --> Print Numbers From 5 to 1 Using Recursions

// let a = 5;

// function print_number(a) {
//     if (a == 0) {
//         return;
//     }
//     console.log(a);
//     print_number(a - 1);
// }
// print_number(a);

// Q2 --> Print Numbers From 1 to 5 Using Recursions

// function numbers(b) {
//     if (b == 6) {
//         return;
//     }
//     console.log(b);
//     numbers(b + 1);

// }
// numbers(1);

//Q3 --> Print sum of first n natural numbers using recursion

var i;
var n;
var sum;

function printnumber(i, n, sum) {
    // if (i == n) {
    //     sum += i;
    //     console.log(sum);
    //     return;
    // }
    sum += i;
    printnumber(i + 1, n, sum);
    console.log(i);
}

printnumber(1, 5, 0);