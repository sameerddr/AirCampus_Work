// function notInRow(arr, row) {
//     let st = new Set();
//     for (let i = 0; i < 9; i++) {
//         if (st.has(arr[row][i])) return false;
//         if (arr[row][i] != ".") st.add(arr[row][i]);
//     }
//     return true;
// }

// function notInCol(arr, col) {
//     let st = new Set();
//     for (let i = 0; i < 9; i++) {
//         if (st.has(arr[i][col])) return false;
//         if (arr[i][col] != ".") st.add(arr[i][col]);
//     }
//     return true;
// }

// function notInBox(arr, startRow, startCol) {
//     let st = new Set();

//     for (let row = 0; row < 3; row++) {
//         for (let col = 0; col < 3; col++) {
//             let curr = arr[row + startRow][col + startCol];
//             if (st.has(curr)) return false;
//             if (curr != ".") st.add(curr);
//         }
//     }
//     return true;
// }

// function isValid(arr, row, col) {
//     return (
//         notInRow(arr, row) &&
//         notInCol(arr, col) &&
//         notInBox(arr, row - (row % 3), col - (col % 3))
//     );
// }

// function isValidConfig(arr, n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (!isValid(arr, i, j)) return false;
//         }
//     }
//     return true;
// }
// let board = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// // document.write(isValidConfig(board, 9) ? "YES" : "NO");