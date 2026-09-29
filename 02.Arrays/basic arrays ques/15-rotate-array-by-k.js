// Question: Rotate an array to the left by k steps.
// Time Complexity: O(n) - Single loop running n times
// Space Complexity: O(n) - Extra temp array of size n

// function leftRotateByK(arr, k) {
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i + k) % arr.length];
//   }
//   console.log(temp);
// }

// leftRotateByK([1, 2, 3, 4, 5, 6], 3);




// Without using space: O(1)
// Time Complexity O(n)
let arr = [1,2,3,4,5,6]
let k = 3

let n = arr.length -1

reverse(0 , k -1)
reverse(k , n)
reverse(0 , n)

console.log(arr);

function reverse(i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];

    i++;
    j--;
  }
}