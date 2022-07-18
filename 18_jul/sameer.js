// Linear Search 

function linear_search(arr, key) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

console.log(linear_search([1, 2, 3, 4, 5, 6], 4));


// Binary Search

function binary_search(arr, key) {

    let s = 0; //start
    let e = arr.length;
    while (s <= e) {
        let mid = (s + e) / 2;
    }
    if (arr[mid] == key) {
        return mid;
    } else if (arr[mid] > key) {
        e = mid - 1;
    }
}