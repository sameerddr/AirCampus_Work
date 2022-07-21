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
add();