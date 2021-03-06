let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));
console.log(arr.indexOf("3")); // -1 
let a = arr.join();
console.log(a);
console.log(typeof(a));
let b = arr.includes(30);
console.log(b);
let c = arr.indexOf(3) !== -1
console.log(c);
let d = a.indexOf("2") !== -1;
console.log(d);
let fruits = ['Apple', 'Banana', 'Strawberry', 'Mango', 'Cherry'];
let bb = fruits.indexOf("Banana")
let aa = fruits.splice(bb, 1);
console.log(aa);
console.log(bb);
console.log(fruits);
for (const iterator of fruits) {
    console.log(iterator);
}
let copy = [...fruits];
console.log(copy);


function add() {
    let a = 2;
    let b = 2;
    return console.log(a + b);
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let yes = words.filter(wo => wo.length > 6);
console.log(yes);
const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result = message.match(exp);
console.log(result);

var x = 2;
console.log(x);
// let x = 3;
// console.log(x);
var x = 3;
var x = 4;
console.log(x);

var obj = {
    name: "vivek",
    getName: function() {
        console.log(this.name);
    }
}

obj.getName();

var y = 24;

function favFunction() {
    var x = 667;
    var anotherFavFunction = function() {
        console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
    }

    var yetAnotherFavFunction = function() {
        console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
    }

    anotherFavFunction();
    yetAnotherFavFunction();
}
favFunction();