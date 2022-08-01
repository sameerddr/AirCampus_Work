const radius = [1, 2, 3, 4];

const area = function(radius) {
    return Math.PI * radius * radius
}
const circum = function(radius) {
    return 2 * Math.PI * radius
}
const diameter = function(radius) {
    return 2 * radius
}
let calculate = function(radius, logic) {
    let output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output
}
console.log(calculate(radius, area));
console.log(calculate(radius, circum));
console.log(calculate(radius, diameter));

let a = [1, 2, 3, 4, 5];

let b = [...a];

function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);