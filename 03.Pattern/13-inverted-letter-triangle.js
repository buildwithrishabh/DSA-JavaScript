// Question: Print an Inverted Letter Triangle.
// Pattern for n = 5:
// A B C D E
// A B C D
// A B C
// A B
// A

/**
 * Prints an inverted letter triangle starting with 'A' on each row.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function invertedLetterTriangle(n) {
  for (let i = n; i >= 1; i--){
    for (let j = 1; j <= i; j++){
      process.stdout.write(String.fromCharCode(64 + j) + " ")
    }
    console.log()
  }
}

invertedLetterTriangle(5);
