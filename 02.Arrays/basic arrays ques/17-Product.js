// Multiply odd indexed elements by
// 2 and add 10 to even indexed elements
// Time Complexity: O(n) - Single loop running n times
// Space Complexity: O(1) - In-place modification, no extra space

let arr = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0 ; i <= arr.length -1 ; i++){
    if (arr[i] % 2 ==0){
        arr[i] = arr[i] + 10
    } else {
        arr[i] = arr[i] * 2
    }
}

console.log(arr);
