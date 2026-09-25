// Question: Check whether an array is sorted in ascending order.

/**
 * Checks if an array is sorted in ascending order.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function checkSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

console.log(checkSorted([1,2,3,4,5,6]))
