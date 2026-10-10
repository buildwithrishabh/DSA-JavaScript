// Question: Print a Solid Square / Rectangle pattern of stars.
// Pattern for n = 5:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

/**
 * Prints an n x n solid square star pattern.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function solidSquare(n) {
  for (let i = 1; i <=n; i ++){
    for (let j = 1; j <=n; j ++){
      process.stdout.write("*")
    }
    console.log()
  }
}

solidSquare(5);