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

// Method 1 --The replace() method returns a new string with the specified string replaced.

//  type 1 --Replace the first occurrence

let text = "Java is awesome. Java is fun."
let results = text.replace("Java", "C");
console.log(results);


// type 2 --Replace all occurrences

let res = text.replace(/Java/g, "J");
console.log(res);

// type 3 --Case-Insensitive Replacement

let re = text.replace(/java/gi, "J");
console.log(re);

// Mehtod 2 --The split() method divides a string into a list of substrings and returns them as an array.
// Note: The split() method does not change the original string.

let alpha = "ABCDE";
let a = alpha.split("");
console.log(a);

let textt = "Java is awesome. Java is fun.";
let aa = textt.split(".");
console.log(aa);

let bb = textt.split("a");
console.log(bb); // why a is is removed from a answer


// Method 3 -- The trim() method removes whitespace from both ends of a string.
const message = "   JAVASCRIPT IS FUN    ";

const newMessage = message.trim();
console.log(newMessage);

let str = "   foo  ";
console.log(str.trim());

// Method 4 -- The slice() method extracts and returns a section of a string.

let strr = "JavaScript is a very absurd programming language.";
console.log(str.slice(28)); // 'programming language.'
console.log(str.slice(4, 15)); // 'Script is a'