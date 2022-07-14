//    Javascript strings

// In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.

//strings example
const name = 'Peter';
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`; //Backticks are generally used when you need to include variables or expressions into a string.

// JavaScript Strings are immutable -- That means the characters of a string cannot be changed. For example,

// let a = 'hello';
// a[0] = 'H';
// console.log(a);

// JavaScript is Case-Sensitive
// let a = 'a';
// let b = 'A'
// console.log(a === b); // false


// JavaScript Multiline Strings -- To use a multiline string, you can either use the + operator. For example,

// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' +
    'in the code.'
console.log(message1);

// JavaScript String Length

let z = 'hello';
console.log(z.length); // 5