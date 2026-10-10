// Question: Print a Right-Angled Triangle star pattern.
// Pattern for n = 5:
// *
// * *
// * * *
// * * * *
// * * * * *

/**
 * Prints a right-angled triangle star pattern.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function rightAngledTriangle(n) {
  for (let i = 1; i <=n; i++) {
    for (let j = 1; j <=i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

rightAngledTriangle(5);
