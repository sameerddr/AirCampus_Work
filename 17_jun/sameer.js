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

let a = parseInt(process.argv[2]);
for (i = 1; i <= a; i++) {
    console.log(i);
}

for (i = 1; i <= a; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}


let rev = 0;
let num = 123456;
let lastDigit;

while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
}

console.log("Reverse number : " + rev);