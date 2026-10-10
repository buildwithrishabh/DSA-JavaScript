// Question: Print a Binary Number Triangle.
// Pattern for n = 5:
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

/**
 * Prints a binary number triangle where values alternate between 1 and 0.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function binaryNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let val = i % 2 !== 0 ? 1 : 0;
    for (let j = 1; j <= i; j++) {
      row += val + " ";
      val = 1 - val;
    }
    console.log(row.trimEnd());
  }
}

binaryNumberTriangle(5);
