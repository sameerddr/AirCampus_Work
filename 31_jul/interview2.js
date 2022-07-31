// "use strict"
let obj = {
    name: "sameer",
    age: 23
}

delete obj.age;
console.log(obj.age);
obj.name = "aman";
console.log(obj.name);
let sum = (function(a, b) {
    return a + b;
})(10, 20);

console.log(sum);

let sub = ((x, y) => x - y);
console.log(sub(3, 2));



// ------------------------

const radius = [1, 2, 3, 4];
const area = function(radius) {
    return Math.PI * radius * radius
}

const cirum = function(radius) {
    return 2 * Math.PI * radius
}

const diameter = function(radius) {
    return 2 * radius
}

const calculate = function(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, cirum));
console.log(calculate(radius, diameter));

// ----------------------------------


let sameer = {
    name: "lokesh",
    age: 22,
    college: "dr dabrau",
    "your father name": "sam"
};

// console.log(sameer["your father name"]);

for (let key in sameer) {
    console.log(key);
    console.log(sameer[key]);
}

// const a = JSON.stringify(sameer);
// console.log(a);
// b = JSON.parse(a);
// console.log(b);

// let { name, age, college } = sameer;

// console.log(`the name of the student is ${name}"`);

let sam = sameer;
sam.name = "naman";
console.log(sameer);
console.log(sam);

function robot(name, age) {
    return {
        name: name,
        age: age
    };
}
const r1 = robot("chhiti", 23);
console.log(r1);


function student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

let st = new student("sameeer", "varshney");
console.log(st);

// -

function sum(...input) {

    // console.log(...input); 

    let total = 0;
    for (var prop of input) {
        total += prop;
    }
    console.log(total);
}
sum(1, 2, 3, 45, 4);