const data = [1, 2, 3, 4, 5, 4, 4, 7, 8, 9, 3, 3, 2];

// ---------------
// data.length = 3;
// console.log(data);

// ---------------
// let a = data.reduce((acc, curr) => acc + curr);
// console.log(a);

// -------------
// let a = new Set(data);
// console.log([...a]);

// let x = 20,
//     y = 30;
// [x, y] = [y, x];
// console.log(x, y);

// Check whaether the given number is present or not

var nums = [1, 2, 3, 4, 5, 6, 7, 8];
let b = 2;

function check(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        console.log(val);
        if (arr[i] === val) {
            return val;
        } else {
            return -1;
        }
    }
}
console.log(check(nums, b));