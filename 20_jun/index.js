// Q1 = Find the greatest of them 


// var a = 2;
// var b = 3;
// var c = 9;
// var d = 5;
// var e = 6;

// if (a > b && a > c && a > d && a > e) {
//     console.log(a);
// } else if (b > a && b > c && b > d && b > e) {
//     console.log(b);
// } else if (c > a && c > b && c > d && c > e) {
//     console.log(c);
// } else if (d > a && d > b && d > c && d > e) {
//     console.log(d);
// } else if (e > a && e > b && e > c && e > d) {
//     console.log(e);
// }

// Q2 =  Sum of the Multiples of the  3 and 5 Under 1000

// var sum = 0;
// for (let i = 0; i < 1000; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// Q3 = WAP from loop that will iterate from 0 to 15. For each loop that will iterate from 0 to 15 . For each iteration ,  it will check that the current number is even or not and display a message 

// for (let i = 0; i < 15; i++) {
//     if (i == 0) {
//         console.log(i + " is even");
//     } else if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// Q4 = WAP to find the power of a number  Using  For loop    (Not Correct)
// 
let number = parseInt(process.argv[2]);
let power = parseInt(process.argv[3]);
console.log(power);
let num = number;
for (let i = 0; i < power - 1; i++) {
    number = number * num;
}
console.log(number);

// Q5 = WAP to calculate the sum of digits in a Number

// let num = parseInt(process.argv[2]);
// var sum = 0;