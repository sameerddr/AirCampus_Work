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