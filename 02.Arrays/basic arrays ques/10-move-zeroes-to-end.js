// Question: Move all zeroes to the end while maintaining the order of other elements.

/**
 * Moves all zeroes to the end of the array in-place.
 * Relative order of non-zero elements is preserved.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function moveZero(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr
}


console.log(moveZero([0,0,0,2,3,4,5,6,7]))