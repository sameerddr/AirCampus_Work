// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (target == nums[i]) {
//       return nums.indexOf(target);
//     }
//   }
// };
// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 3));
// console.log(searchInsert([1, 3, 5, 6], 6));

// // ---------------------------------
// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = 0; j <= nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 7, 11, 15], 18));

// ---------------------------------------------------------------------------------
// Triplets

// var countGoodTriplets = function (arr, a, b, c) {
//   let count = 0;
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= c &&
//           Math.abs(arr[i] - arr[k]) <= c
//         )
//           count += 1;
//       }
//     }
//   }
//   return count;
// };
// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
// console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1));

// -------------------------------------------------------

// var smallerNumbersThanCurrent = function (nums) {
//   answer = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         count++;
//       }
//     }
//     answer.push(count);
//   }
//   return answer;
// };

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// const mapper = (arr) => arr.map((i) => arr.filter((n) => n < i).length);
// console.log(mapper([8, 1, 2, 2, 3]));

// function myFunction(a) {
//     let p = a.splice(0, 3);
//     if (a.length > 0) {
//         return a;
//     } else {
//         return [];
//     }
// }
// console.log(myFunction([1, 2, 3, 4, 5, 6, 6, 7]));

console.log("Starting");
console.log(isNaN("Hello"));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(22.3));
console.log(isNaN(undefined));

function greet() {
    console.log("say Good evening");
}
greet();

let s = function() {
    console.log("sameer");
};
s();

(function sum(a, b) {
    console.log(a + b);
});

let sum = (x, y) => {
    console.log(x + y);
};
sum(2, 5);

const radius = [1, 2, 3, 4, 5];

const area = function(radius) {
    return 2 * Math.PI * radius;
};
const diameter = function(radius) {
    return 2 * radius;
};

const calculate = function(radius, logic) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        console.log(logic);
        console.log(radius);
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

const property = "firstname";
const firstname = "sameer";

const user = {
    property: "name",
    [property]: "name",
};
console.log(user);

const biodata = {
    name: "vinod",
    age: 26,
    a: "c",
};

const { name, age, a } = biodata;
console.log(`${name}${age}${a}`);

function robar(name) {
    return {
        name: name,
        talk: function() {
            console.log("hi " + name);
        },
    };
}

const obj1 = robar("sameer");
obj1.talk();
const obj2 = robar("ramesh");
obj2.talk();

function student(fn, ls) {
    console.log(this + "this is this");
    this.firstname = fn;
    this.lastname = ls;
    this.getname = function() {
        console.log(this.firstname);
        console.log(this.lastname);
    };
}
let stu = new student("sam", "var");
stu.getname();
console.log(stu);

let rest1 = {
    age: 21,
    age2: 22,
};

let x = {...rest1 };
console.log(x);