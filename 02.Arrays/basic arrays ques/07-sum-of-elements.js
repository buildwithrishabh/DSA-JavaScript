// Question: Find the sum of all elements.

/**
 * Calculates the total sum of all elements in an array.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findSum(arr) {
  let totalSum = 0;

  for (const num of arr) {
    totalSum += num;
  }

  return totalSum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 2, 4, 10];
const total = findSum(numbers);

console.log("Array:", numbers);
console.log("Sum of all elements:", total);
