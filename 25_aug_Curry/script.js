// Currrying --  Currying is a process in functional programming  in which we can transform a function with multiple arguments into a sequence of nesting function . It returns a new function that excepts the next argument inline .


// OR

// A function takes one argument at a time and return a new function expecting the next argument , then we will crete a new function which will take us another argument


// NOTE- THE NUMBER OF ARGUMNETS A FUNCTION TAKES IS ALSO CALLED ARITY.
//  here a , b is arity
// function mul(a,b) {
//     // code 
// }

// So, currying break down a function that takes multiple arguments into a series of function that each take only one arguments

// Q1 --  sum(2)(6)(3)

function summ(a, b, c) {
    return a + b + c;
}
console.log(summ(2, 6, 3));

// or USING CURRY


function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(6)(3));
// console.log(sum(2)(6));
// console.log(sum(2));


// Q2--

// evaluate("sum")(4)(2) => 6
// evaluate("mul")(4)(2) => 8
// evaluate("sub")(4)(2) => 2
// evaluate("divide")(4)(2) => 2

function evalute(operation) {
    return function(a) {
        return function(b) {
            if (operation === "sum") return a + b;
            else if (operation === "mul") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "sub") return a - b;
            else return "Invalid Opertion";
        }
    }
}

console.log(evalute("sum")(4)(2));


//Q3 -- Infinite Currying -> sum(1)(2)(3).....(n)


function add(a) {
    return function(b) {
        if (b) return add(a + b);
        return a;
    };
}
console.log(add(2)(3)(4)());
console.log(add(2)(3)(4)(2));