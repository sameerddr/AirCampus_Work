// map filter and reduce pollyfills 

// basics revision of map , filter and reduce

// 1 - map

// const nums = [1, 2, 3, 4, 5, 6];

// const multiply = nums.map((num, i, arr) => {

//     return num * 2 + i;
// });
// console.log(multiply);


// 2- filter

// const num = [1, 2, 3, 4, 5, 6, 7, 8];

// const morethan2 = num.filter((num, i) => {
//     return num > 2;
// });
// console.log(morethan2);

// 3 - reduce 

const numss = [2, 3, 4, 65, 6, 7, 8, 808];

const sum = numss.reduce((acc, curr, index, arr) => {

    // if there is no intial value , it takes first element of array as value for accululator
    return acc + curr;

})

console.log(sum);

// ---------------------------------------

// Pollyfill of Map

Array.prototype.myMap = function(cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        // this is going to refrence parent array for ex
        // Array.myMap -- here this will refrence to myMap 

        temp.push(cb(this[i], i, this));
        // (cb(num,i,arr))-- basically these are parameters of cb function
    }
    return temp
}

const nums = [1, 2, 3, 4, 5, 6];

const multiply = nums.myMap((num, i, arr) => {

    return num * 2 + i;
});
console.log(multiply);

// pollyfill for filter

Array.prototype.myFilter = function(cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];

const morethan2 = num.myFilter((num, i) => {
    return num > 2;
});
console.log(morethan2);