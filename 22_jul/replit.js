// replit test question

let myArr = [1, 5, 7, 8]

function count_all_divisions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % (i + 1) == 0) {
            count = count + 1;
        }
    }
    return count
}
console.log(count_all_divisions(myArr))

let arr = [1, 5, 7, 8]
let pos = [2, 0]
let ele = [-1, 3]

function change_elements(arr, pos, ele) {
    for (let i = 0; i < pos.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j == pos[i]) {
                arr[j] = ele[i]
            }
        }
    }
    return arr
}
console.log(change_elements(arr, pos, ele))

let newarr = [2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']

function operations(arr) {
    let myarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'ADD_BEG') {
            myarr.unshift(arr[i - 1])
        }
        if (arr[i] == 'REM_BEG') {
            myarr.shift()
        }
        if (arr[i] == 'ADD_END') {
            myarr.push(arr[i - 1])
        }
        if (arr[i] == 'REM_END') {
            myarr.pop()
        }
    }
    return myarr
}
console.log(operations(newarr))