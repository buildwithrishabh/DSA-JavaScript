// Question: Remove duplicates from a sorted array.

/**
 * Removes duplicate elements from a sorted array in-place.
 * Modifies the array so the first `uniqueCount` elements are unique.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function removeDuplicates(arr) {
  let i = 0;

  for (let j = 1; j < arr.length - 1; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  arr.length = i + 1;
  return arr;
}



console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4])); 