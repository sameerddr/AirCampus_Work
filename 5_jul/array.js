// function firstCapital(str) {
//     let result = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(firstCapital("I Love Code"));

// function factorial(n) {
//     if (n == 0 || n < 1) return 1;
//     else return n * factorial(n - 1);
// }
// console.log(factorial(8));

// function longestWord(sen) {
//     let len = [];
//     let words = sen.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         len.push(words[i].length);
//     }
//     let element = Math.max(...len);
//     return element;
// }
// console.log(longestWord("I Love Dogs"));

// function simpleadding(n) {
//     if (n == 1 || n < 1) {
//         return 1;
//     } else {
//         return n + simpleadding(n - 1);
//     }
// }
// console.log(simpleadding(140));

// function firstCapital(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         let o = words[i][0].toUpperCase() + words[i].slice(1);
//         console.log(o);
//         return o;
//     }
// }
// console.log(firstCapital("i ran there"));

function Mularray(arr) {
    console.log(arr[i - 2]);
    // for (let i = 0; i < arr.length; i++) {
    //     //  arr[i - 2] * arr[i - 1];
    // }
}
console.log(Mularray([1, 2, 3, 4, 5]));