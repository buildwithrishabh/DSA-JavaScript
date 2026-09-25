// Question: Find the smallest element in an array.

/**
 * Finds the minimum element in an array.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findSmallest(arr) {
  let min = arr[0]

  for (let i of arr){
    if (min > i){
      min = i
    }
  }
  return min
}

console.log(findSmallest([1,2,3,4,5,6,7,10]))
