// The two-dimensional array is a collection of items which share a common name and they are organized as a matrix in the form of rows and columns.


// program to create a two dimensional array 

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

let rows = matrix.length;
let columns = matrix.length;

let sum = 0;
for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
        sum += matrix[i][j];
    }
}
console.log(sum);