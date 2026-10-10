// Question: Print an Inverted Right-Angled Star Triangle.
// Pattern for n = 5:
// * * * * *
// * * * *
// * * *
// * *
// *

/**
 * Prints an inverted right-angled star triangle.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function invertedRightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

invertedRightTriangle(5);
