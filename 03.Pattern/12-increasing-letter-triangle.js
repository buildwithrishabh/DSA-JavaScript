// Question: Print an Increasing Letter Triangle.
// Pattern for n = 5:
// A
// A B
// A B C
// A B C D
// A B C D E

/**
 * Prints an increasing letter triangle from 'A' up to the row length.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function increasingLetterTriangle(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
      process.stdout.write(String.fromCharCode(64 + j) + " ")
    }
    console.log()
  }
}

increasingLetterTriangle(5);
