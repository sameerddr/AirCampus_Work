// Full Array Conepts

// Array -  Storing a collection of multiple items under a single variable name, and has members for performing common array operations. 

// Array Properties--

//1-JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// 2- JavaScript arrays are resizable and can contain a mix of different data types.
// Array -- 

let vechicle = ["car", "scooter", "bus"]; // You Can Use Single & Double Quotes
console.log(vechicle.length); // .length is used to get the length of given array

console.log(typeof(vechicle)); // Object ??? 

console.log(vechicle[0]); // Car will print as it stored in 0 Index
console.log(vechicle[1]); //  scooter will print as it stored in 1 Index
console.log(vechicle[2]); // Bus will print as it stored in 2 Index
console.log(vechicle[3]); // Undefined bcz we have not given any value at 3 index

for (let i = 0; i < vechicle.length; i++) {
    console.log(vechicle[i]); // priting the elements using for loop
}


/*  Dry Run For Above For Loop

     i = 0  which is less than Array length, console.log(0); i.e car will print
     i = 1  which is less than Array length, console.log(1); i.e scooter will print
     i = 2  which is less than Array length, console.log(2); i.e bus will print
     i = 3 condition will false , now the loop finsih
*/

// Differnece Between Object and Arrya 
/* 
 
console.log(type of[]);    will return object
console.log(type of{});    will return object

console.log([] instanceof Array ); will return true 
or isarray function 

basical array is indexed elements
object is named elements 


*/

let num = [10, 20];
console.log(num[0], num[1]);

let copy = num;
console.log(num[0], num[1]);

copy[0] = 15;

console.log(num, copy);
num[1] = 30;
console.log(num, copy);

// You Can Change The value Of The Array elements after declaration & and also be stored in new variable



// Array Methods--


// Method 1 - pop() - The pop() method removes the last element from an array.

const language = ["javascript", "React", "Css"];

console.log(language.pop);

for (let i = 0; i < array.length; i++) {

    console.log(language[i]);
}