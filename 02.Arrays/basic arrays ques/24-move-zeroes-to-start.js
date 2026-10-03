// Question: Move all zeroes to the beginning while maintaining the order of other elements.

/**
 * Moves all zeroes to the start/beginning of the array in-place.
 * Relative order of non-zero elements is preserved.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function moveZero(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr
}


console.log([1,2,8,9,0,0,0,0,0,0,0,0,0,0,0])