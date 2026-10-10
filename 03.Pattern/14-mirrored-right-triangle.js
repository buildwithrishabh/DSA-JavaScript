// Question: Print a Mirrored Right-Angled Triangle (Right-Aligned Star Triangle).
// Pattern for n = 5:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

/**
 * Prints a mirrored right-angled triangle star pattern.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function mirroredRightTriangle(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n-i; j++){
      process.stdout.write(" ")
    }

    for (let k = 1; k <= i; k ++ ){
      process.stdout.write("*")
    }
    console.log()
  }
}

mirroredRightTriangle(5);
