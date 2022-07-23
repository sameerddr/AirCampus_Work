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