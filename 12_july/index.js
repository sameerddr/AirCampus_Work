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

let res = number.splice(2, 3, "react", "nodejs"); // replace the values of Index 2 and 3 by  React and nodejs

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


// let alpha = ["D", "B", "C", "D", "w", "r"];

// let sa = alpha.indexOf("r");
// console.log(sa);

// Method 11 -- slice() - return a shallow copy of a portion of an array into a new array object


// let newarray = [2, 3, 4, 5, 6, 7];
// let newArray = newarray.slice(3, 6);
// console.log(newArray);

// Method 12 -- map() - The map() method creates a new array with the results of calling a function for every array element.

let numbers = [2, 3, 4, 5, 6, 7];

function square(num) {
    return num * num;
}

let new_numbers = numbers.map(square);
console.log(new_numbers);




// Method 13 - The filter() method returns a new array with all elements that pass the test defined by the given function.
const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
let newPrices = prices.filter((price) => (price > 2000));
// && !Number.isNaN(price)
console.log(newPrices); // [ 3000, 5000, 8000 ]

// -----
const languages = ['Panner Fried Rice', 'Chicken Biryani', 'Paneer Paratha', 'Cold Coffee', 'Paneer Roll'];

function searchFor(arr, query) {
    function condition(element) {
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
    return arr.filter(condition);
}

let newArr = searchFor(languages, "t");
console.log(newArr);

// Mehthod 14 -- The reduce() method executes a reducer function on each element of the array and returns a single output value.
const numberss = [1, 2, 3, 4, 5, 6];
let summation = numberss.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(summation);

// Method 15 -- The sort() method sorts the items of an array in a specific order (ascending or descending).

var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort());
console.log(names); //  It Change the values original array

// ------------
var priceList = [1000, 50, 2, 7, 14];
priceList.sort(function(a, b) {
    return a - b;
});

// Output: Ascending - 2,7,14,50,1000
console.log("Ascending - " + priceList);
priceList.sort((a, b) => b - a);

// Output: Descending - 1000,50,14,7,2
console.log("Descending - " + priceList);

// Method 16 -- The some() method tests whether any of the array elements pass the given test function.

let ageArray = [34, 23, 20, 26, 12];

function checkMinor(age) {
    return age < 18;
}
// checks whether ageArray contains any element that is less than 18
let check = ageArray.some(checkMinor);

console.log(check);

let scoreObtained = [45, 50, 39, 78, 65, 20];

// a test function: returns score less than 40
function studentIsPassed(score) {
    return score > 40;
}

// checks if score of at least one student is less than 40  
if (scoreObtained.some(studentIsPassed) == true) {
    console.log("At least one of the students failed.");
} else
    console.log("All students are passed.");

// Method 17 -- The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

let message = ["JavaScript", "is", "fun."];

// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);

var collection = [3, ".", 1, 4, 1, 5, 9, 2];
console.log(collection.join("")); // 3.141592

// Mehtod 18 -- The JavaScript Array every() method checks if all the array elements pass the given test function.
let age = [34, 23, 20, 26, 12];
let check1 = ageArray.every(age => age >= 18); // false
console.log(check1);


let array1 = [1, 2, 3];
let array2 = [7, 8, 9];
let array3 = [];
// let result = [...array1,array2];

for (let i = 0; i < array1.length; i++) {

    // console.log(array1[i]);
    array3 = array1[i];
    console.log(array3);
}
// console.log(result);

for (let j = 0; j < array2.length; j++) {
    array4 = array2[j];
    console.log(array4);
}