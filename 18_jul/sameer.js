// Linear Search 
// let arr = arr[];

function linear_search(arr, key) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

console.log(linear_search([1, 2, 3, 4, 5, 6], 4));