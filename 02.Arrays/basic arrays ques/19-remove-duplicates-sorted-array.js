// Question: Remove duplicates from a sorted array in-place and return the number of unique elements (k).
// (LeetCode 26 - Remove Duplicates from Sorted Array)
//
// Time Complexity: O(n) - Single pass through the array of length n
// Space Complexity: O(1) - In-place modification, no extra array used

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// Example test
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log("Count of unique elements (k):", k);
console.log("Array with unique elements:", nums.slice(0, k));

