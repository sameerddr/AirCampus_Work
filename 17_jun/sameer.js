// console.log("working");
// var a = 20;
// var b = 20;
// console.log(a);
// console.log(b);
// console.log(a + b);
// let c;
// c = process.argv[6];
// console.log(c);

// let a = parseInt(Process.argv[2]);
// let b = parseInt(Process.argv[3]);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let a = 1;
// while (a <= 10) {
//     console.log(a);
//     a++;
// }
// ------------------------------------for loop------------
// let a = parseInt(process.argv[2]);
// for (i = 1; i <= a; i++) {
//     console.log(i);
// }

// for (i = 1; i <= a; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }

// }


// let rev = 0;
// let num = 123456;
// let lastDigit;

// while (num != 0) {
//     lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse number : " + rev);




// ---------------------while loop------------------
// let b = parseInt(process.argv[3]);
// let x = 1;
// while (x <= b) {
//     if (x % 2 == 0) {
//         console.log(x);
//         x++;
//     }

// }


// let c = parseInt(process.argv[4]);
// let y = 1;
// while (y<c) {
//     console.log(y)
//     y++;
// }


// ------------------------------------------------
//


// let a = 1;
// let b = 1;
// for (let i = 1; i <= 10; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }
// num = parseInt(process.argv[4]);
// if (num % 5 == 0) {
//     console.log("World");
// } else if (num % 3 == 0) {
//     console.log("Hello");

// } else if (num % 15 == 0) {
//     console.log("Hello World");
// } else {
//     console.log(num);
// }
let num = 6
let per = 0;
for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        per = per + i;
    }
}
if (per == num) {
    console.log("perfect number");
} else {
    console.log("perfect number");

}