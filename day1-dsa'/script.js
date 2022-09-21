var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      return nums.indexOf(target);
    }
  }
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 3));
console.log(searchInsert([1, 3, 5, 6], 6));

// ---------------------------------
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 18));
