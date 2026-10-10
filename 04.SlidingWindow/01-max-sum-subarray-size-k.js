// Level 1: Fixed Window
// Problem 1: Maximum Sum of K Consecutive Elements
// Description: Given an array of integers and an integer k, find the maximum sum of any contiguous subarray of size k.
// LeetCode Equivalent: Subarray with given size / Sliding Window technique

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxSumSubarray(arr, k) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  maxSum = sum;
  for (let j = k; j < arr.length; j++) {
    sum += arr[j];
    sum -= arr[j - k];

    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

// Test cases
console.log("Max sum (k=3):", maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (subarray [5, 1, 3])
console.log("Max sum (k=2):", maxSumSubarray([2, 3, 4, 1, 5], 2)); // Output: 7 (subarray [3, 4])
console.log(
  "Max sum (k=4):",
  maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
); // Output: 39 ([4, 2, 10, 23])
