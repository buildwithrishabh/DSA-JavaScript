// Question: Rotate an array to the right by k steps.
// Time Complexity: O(n) - Reversing portions of the array takes linear time
// Space Complexity: O(1) - In-place rotation, no extra space used

let arr = [1, 2, 3, 4, 5];
let k = 2;
let n = arr.length;

k = k % n; // In case k is greater than array length

reverse(0, n - 1);
reverse(0, k - 1);
reverse(k, n - 1);

console.log(arr);

function reverse(left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
}

