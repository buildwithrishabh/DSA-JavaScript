// Question: Print a Half Diamond Star Pattern.
// Pattern for n = 5:
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

/**
 * Prints a half diamond star pattern.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function halfDiamondStar(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i <= n ? i : 2 * n - i;
    console.log("*".repeat(stars));
  }
}

halfDiamondStar(5);
