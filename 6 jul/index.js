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


// Method 1 - push() - The push() method add the last element in an array.

const language = ["javascript", "React", "Css"];

language.push("dart");
language.push("MongoDB");

console.log(language);

// Method 2 - unshift() - The unshift() method add the  element in start of an array.

language.unshift('Java');
language.unshift('C++');

console.log(language);

// Method 3 - pop() - The pop() method removes the last element in an array.

language.pop();
language.pop("java"); // The java will not be deleted as the last element is only deleted 

console.log(language);

// Method 4 - shift() - The shift() method removes the  element in start of an array.

language.shift();
console.log(language);

// Method 5 - reverse() - It reversed The array elements

language.reverse();
console.log(language);

// Method 6 - Array.isarray()  - Is Used To Check wheather it is a array or not

console.log(Array.isArray(language));

// Mthod 7 - .concat()--  returns a new array by merging two or more arrays


let a = ["q", "b", "c", "d"];

let b = [1, 3, 4, 5];

let s = a.concat(b);
console.log(s);


// Method 8 - splice() - returns an array by changing (adding/removing) its elemets in places



//             0        1       2      3
let number = ["js", "python", "java", "c"];

// let res = number.splice(2, 3, "react", "nodejs"); // replace the values of Index 2 and 3 by  React and nodejs

// console.log(res);
// console.log(number);

// let re = number.splice("js", "python", "react", "nodejs"); // we only have to pass the index only for replacing the elemets 



// console.log(number);


// let result = number.splice(2, 3); // It will remove the elements at index at 2 & 3
// console.log(number);

let r = number.splice("php", "data struture"); // Nothing will effect the original array 
console.log(number);

// Method 9 -- lastindexof() - returns the index of the last occurence of a specified element in an array

let pricelist = [12, 34, 565, 34, 344, 33, 7];

let p = pricelist.lastIndexOf(33); // return the index from lasr element
console.log(p);

let q = pricelist.lastIndexOf(2345); // return -1 if the value is not present
console.log(q);

// let alpha = ["D", "B", "C", "D", "w", "r"];

// console.log(alpha.lastIndexOf("D", 2));

// Method 10 -- indexof() -  returns the first index of occurence of an array element
// or -1 if it is not found


let alpha = ["D", "B", "C", "D", "w", "r"];

let sa = alpha.indexOf("r");
console.log(sa);

// Method 11 -- slice() - return a shallow copy of a portion of an array into a new array object


let newarray = [2, 3, 4, 5, 6, 7];
let newArray = newarray.slice(3, 6);
console.log(newArray);