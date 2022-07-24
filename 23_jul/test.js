function sameer() {
    console.log("codins is best");
}

// Function declaration , defination , statement

let a = function(num) {
    return console.log(num * num);
}
a(2);

// Anonymous Function

function square(num) {
    return num * num;
}

function display(fn) {
    console.log("saquare is " + fn(5));
}
display(square);

// first class function

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    // callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe());


// callback Function

// arrow function properties

function fun() {
    console.log(arguments);
}
fun(1, 2, 3);

let fun2 = () => {
        console.log(arguments);
    }
    // fun2(1, 23, 4);

let user = {
    username: "sameer",
    r1: () => {
        console.log("this is username" + this.username);
    },
    r2() {
        console.log("this is normal" + this.username);
    }

}
user.r1();
user.r2();

const sameer2 = {
    name: "virat",
    age: 31
}
sameer2.name = "dhoni";
delete sameer2.age;
console.log(sameer2);
console.log(sameer2.name);

const fun3 = (function(a) {
    delete a;
    return a;
})(5);

console.log(fun3);
const sameer3 = {
    name: "virat",
    age: 31,
    "liked this video": true
}
console.log(
    ["liked this video"]);

const obj = {
    nam: "yes",
    age: 12
}

for (key in obj) {
    console.log(key);
    console.log(obj[key]);
}

const users = {
    name: "piyush",
    age: 3265
}

// console.log(JSON.stringify(users));
let aa = JSON.stringify(users);
console.log(JSON.stringify);

// refrencing object



// deep copy vs shallow copy

let person = {
    name2: "sameer",
    age: 34
}
console.log(person);

// let copy = person;

// copy.name2 = "honey";
// console.log(copy);
// console.log(person);


let copy2 = JSON.parse((JSON.stringify(person)));

copy2.name2 = "sachimn";
console.log(person);
console.log(copy2);