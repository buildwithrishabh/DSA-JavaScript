// Question: Find the last occurrence (index) of a given element in an array. If the element is not found, return -1.
//
// Example 1:
// Input: arr = [1, 2, 3, 4, 2, 5], target = 2
// Output: 4 (Index of last occurrence of 2)
//
// Example 2:
// Input: arr = [10, 20, 30, 40], target = 50
// Output: -1 (Target not found)

let arr = [1, 2, 3, 4, 2, 5, 2];
let target = 2;

let last = -1;
for (let i = 0; i < arr.length; i ++){
    if (arr[i] === target){
        last = i
    }
}

console.log(last)

