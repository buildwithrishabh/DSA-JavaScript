// Return index of sum of 2 number to target
let arr = [2, 7, 11, 15];
let target = 9;

for (let i = 0; i < arr.length; i++) {
  let value = target - arr[i];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === value && i !== j) {
      console.log(i, j);
    }
  }
}
