// The two-dimensional array is a collection of items which share a common name and they are organized as a matrix in the form of rows and columns.


// program to create a two dimensional array all elements Sum 

// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// let rows = matrix.length;
// let columns = matrix[0].length;

// let sum = 0;
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//         sum += matrix[i][j];
//     }
// }


// IS It Write?
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//         sum += matrix[i][j];
//     }
// }


// console.log(sum);



// program to calculate the sum of diagonal of above matrix

// 1 method - using two loops
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//         if (i === j) // it work for [0][0]  ,[1][1] , [2][2] and so on
//             sum += matrix[i][j];
//     }
// }
// console.log(sum);

// 2 method - using single loops
// for (let i = 0; i < rows; i++) {
//     sum += matrix[i][i];
// }
// console.log(sum);

// program to find the program to sum the single columns

// let start = 0; // it will define the no of coloumn from starting

// for (let i = 0; i < rows; i++) {
//     sum += matrix[i][start];
// }
// console.log(sum);

// program to find the program to sum the single row


// let start = 0; // it will define the no of rows from starting

// for (let i = 0; i < rows; i++) {
//     sum += matrix[start][i];
// }
// console.log(sum);


























































































// program to create a two dimensional array

// function twoDimensionArray(a, b) {
//     let arr = [];

// creating two dimensional array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i] = [];
//         }
//     }

//     // inserting elements to array
//     for (let i = 0; i< a; i++) {
//         for(let j = 0; j< b; j++) {
//             arr[i][j] = j;
//         }
//     }
//     return arr;
// }

// const x = 2;
// const y = 3;

// const result = twoDimensionArray(x, y);
// console.log(result);
// }