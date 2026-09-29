// Print negative number only from an array
// Time Complexity: O(n) - Iterates through the array once
// Space Complexity: O(1) - No extra space used
let arr = [1, 2, 3, 4, 5, -4, -5, -6];

for (let value of arr) {
  if (value < 0) {
    console.log(value);
  }
}


