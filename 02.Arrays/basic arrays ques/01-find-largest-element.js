// Question: Find the largest element in an array.

/**
 * Finds the maximum element in an array.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findLargest(arr) {
  let max = arr[0]

  for (let i of arr){
    if (max < i){
      max = i
    }
  }
  return max
}

console.log(findLargest([1,2,3,4,5,6,7,10]))