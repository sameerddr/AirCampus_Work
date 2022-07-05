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

*/