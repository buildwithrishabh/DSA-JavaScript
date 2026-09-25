// Question: Rotate an array to the right by 1 position.

/**
 * Rotates an array to the right by 1 position in-place.
 * Example: [1, 2, 3, 4, 5] -> [5, 1, 2, 3, 4]
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function rotateRight(arr) {
  let copy = arr[arr.length - 1]

  for (let i = arr.length - 1; i > 0 ; i --){
    arr[i] = arr[i - 1]
  }

  arr[0] = copy;

  return arr;
  
}

console.log(rotateRight([1,2,3,4,5]))