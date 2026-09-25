// Question: Count even and odd numbers in an array.

/**
 * Counts the number of even and odd integers in an array.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return { evenCount, oddCount };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 2, 4, 10];
const { evenCount, oddCount } = countEvenOdd(numbers);

console.log("Array:", numbers);
console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);
