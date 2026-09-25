// Question: Reverse an array without using reverse().

/**
 * Reverses an array in-place using two pointers.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left] , arr[right]] = [arr[right] , arr[left]];

        left ++;
        right --;
    }
    return arr
}


console.log(reverseArray([1,2,3,4,5,6,7]));
