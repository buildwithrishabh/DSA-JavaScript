// Question: Print a Diamond Star Pattern.
// Pattern for n = 5:
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

/**
 * Prints a diamond star pattern by combining an upright and inverted pyramid.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function diamondStar(n) {
  // Upper half
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1);
    let stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars);
  }
  // Lower half
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(i);
    let stars = "*".repeat(2 * (n - i) - 1);
    console.log(spaces + stars);
  }
}

diamondStar(5);
