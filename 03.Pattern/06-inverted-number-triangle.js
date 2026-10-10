// Question: Print an Inverted Number Triangle.
// Pattern for n = 5:
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

/**
 * Prints an inverted number triangle.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function invertedNumberTriangle(n) {
  for (let i = n; i >=1 ; i--){
    for (let j = 1 ; j <= i; j ++){
      process.stdout.write(j+" ")
    }
    console.log()
  }
}

invertedNumberTriangle(5);
