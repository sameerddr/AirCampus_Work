function changeArray(arr) {
    let LS_Element = arr[arr.length - 1] * 2;
    arr.splice(-2, 1, LS_Element);
    return arr;
}
console.log(changeArray([1, 2, 3, 4, 5]));