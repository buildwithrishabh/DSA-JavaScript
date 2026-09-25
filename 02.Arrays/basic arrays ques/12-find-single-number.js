// Question: Find the element that appears only once when every other element appears twice.

/**
 * Finds the single non-repeated element using XOR bitwise operator.
 * Property: a ^ a = 0, and a ^ 0 = a.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function singleNumber(arr) {
  let number = 0;

  for (let i of arr) {
    number = number ^ i;
  }

  return number;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
