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