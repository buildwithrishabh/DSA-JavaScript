// Question: Print a Right-Angled Number Triangle.
// Pattern for n = 5:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

/**
 * Prints a right-angled number triangle with consecutive numbers in each row.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function rightAngledNumberTriangle(n) {
  for (let i = 1; i <= n; i ++){
    for (let j = 1; j <= i; j++){
      process.stdout.write( j + " ")
    }
    console.log()
  }
}

rightAngledNumberTriangle(5);
