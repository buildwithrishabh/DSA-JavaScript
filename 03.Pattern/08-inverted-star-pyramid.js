// Question: Print an Inverted Star Pyramid.
// Pattern for n = 5:
// *********
//  *******
//   *****
//    ***
//     *

/**
 * Prints an inverted star pyramid.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function invertedStarPyramid(n) {
  for (let i = 0; i < n; i++) {
    // Spaces: i
    let spaces = " ".repeat(i);
    // Stars: 2 * (n - i) - 1
    let stars = "*".repeat(2 * (n - i) - 1);
    console.log(spaces + stars);
  }
}

invertedStarPyramid(5);
