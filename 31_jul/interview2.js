// "use strict"
let obj = {
    name: "sameer",
    age: 23
}
console.log(obj.age);

let sum = (function(a, b) {
    return a + b;
})(10, 20);

console.log(sum);

let sub = ((x, y) => x - y);
console.log(sub(3, 2));



// ------------------------
const area = function(radius) {
    return Math.PI * radius * radius
}

const cirum = function(radius) {
    return 2 * Math.PI * radius
}

const diameter = function(radius) {
    return 2 * radius
}