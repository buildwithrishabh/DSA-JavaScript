// Question: Find the missing number from 1 to N.

/**
 * Finds the missing number in an array containing numbers from 1 to N with one missing.
 * Uses the mathematical formula: Sum = N * (N + 1) / 2
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function findMissingNumber(arr) {
  let n = arr[arr.length - 1];
  let formula = n * (n + 1) / 2;
  let totalOfArr = 0;

  for (let i of arr){
    totalOfArr +=  i;
  }

  let findingNum = formula - totalOfArr;
  return findingNum
}

console.log(findMissingNumber([1,2,3,5]))