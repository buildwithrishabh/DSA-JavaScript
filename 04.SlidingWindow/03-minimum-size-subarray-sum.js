// Level 2: Variable Window
// Problem 3: Minimum Size Subarray Sum
// LeetCode 209: https://leetcode.com/problems/minimum-size-subarray-sum/
// Description: Given an array of positive integers nums and a positive integer target, return the minimal length of a
// contiguous subarray [nums[l], nums[l+1], ..., nums[r-1], nums[r]] of which the sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.

/**
 * Time Complexity: O(n) - Each element is visited at most twice (by left and right pointers).
 * Space Complexity: O(1)
 */
function minSubArrayLen(target, nums) {
  let sum = 0;
  let minlength = Infinity;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      let length = right - left + 1;
      minlength = Math.min(minlength, length);

      sum -= nums[left];
      left++;
    }
  }

  return minlength;
}

// Test cases
console.log("Min Subarray Len:", minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4, 3])
console.log("Min Subarray Len:", minSubArrayLen(4, [1, 4, 4])); // Output: 1 ([4])
console.log("Min Subarray Len:", minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0
