// let numbers = [2, 3, 5, 7, 11, 13, 17];

// // create another array by slicing numbers from index 3 to 5
// let newArray = numbers.slice(3, 6);
// console.log(newArray);

// // Output: [ 7, 11, 13 ]

// // -----
// let prime_numbers = [2, 3, 5, 7, 9, 11];

// // replace 1 element from index 4 by 13
// let removedElement = prime_numbers.splice(4, 1, 13);
// console.log(removedElement);
// console.log(prime_numbers);

// // Output: [ 9 ]
// //         [ 2, 3, 5, 7, 13, 11 ]

// // The some() method tests whether any of the array elements pass the given test function.
// // a test function: returns an even number
// function isEven(element) {
//     return element % 2 === 0;
// }

// // defining an array
// let number = [1, 3, 2, 5, 4];

// // checks whether the numbers array contain at least one even number
// console.log(number.some(isEven));

// // Output: true
// // ------
// let languages = ["JavaScript", "Java", "C"];

// // checking whether the array contains 'Java'
// let check = languages.includes("Java");

// console.log(check);

// // Output: true

// // ---

// // The from() method creates a new array from any array - like or iterable object.
// // creating an array from a string 
// let array1 = Array.from("JavaScript");

// console.log(array1);

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
// 1234 8 12 16 15 14 13 9 5 6 7 11 10

let top = 0,
    bottom = 3,
    left = 0,
    right = 3;
direction = 0;

while (left <= right && top <= bottom) {
    if (direction == 0) {
        for (let i = left; i <= right; i++) {
            console.log(matrix[top][i]);

        }
    }
    top += 1;
    direction = 1;
}
if (direction == 1) {
    for (let i = top; i <= bottom; i++) {
        console.log(matrix[top][i]);
    }
}
top += 1;
direction = 1;