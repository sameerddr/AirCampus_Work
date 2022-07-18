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
    let e = arr.length; //end 
    while (s <= e) {
        let mid = (s + e) / 2;
        if (arr[mid] == key) {
            return mid;
        } else if (arr[mid] > key) { // if our key value is  behind the middle element of array 
            e = mid - 1;
        } else {
            s = mid + 1; // if key is after the mid value we will increase the s value for making new start point
        }
    }
    return -1;
}
console.log(binary_search([11, 22, 33, 44, 55, 66], 66));