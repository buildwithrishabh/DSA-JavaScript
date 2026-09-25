// Question: Find the frequency of a given element.

/**
 * Counts how many times a given target appears in an array.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function countNum(arr, target) {
  let count = 0;

  for (let i of arr) {
    if (target === i) {
      count++;
    }
  }

  return count;
}


console.log(countNum([1,2,3,4,4,4,4,5,6,6,6,7,7,8] , 7))