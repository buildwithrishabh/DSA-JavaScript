// Question: Find the second largest element without sorting.

/**
 * Finds the second largest distinct element in an array without sorting.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i of arr) {
    if (i > largest) {
      second = largest; // purana largest ab second ban gaya
      largest = i;      // naya largest set ho gaya
    } else if (i > second && i < largest) {
      second = i;       // agar largest se chhota par second se bada ho
    }
  }

  return second;
}

// Test cases check karo:
console.log(secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(secondLargest([10, 5, 8]));                 
console.log(secondLargest([20, 20, 10]));                 
