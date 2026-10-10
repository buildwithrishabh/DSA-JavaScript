// Level 1: Fixed Window
// Problem 2: Maximum Number of Vowels in a Substring of Given Length
// LeetCode 1456: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
// Description: Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowels are 'a', 'e', 'i', 'o', and 'u'.

/**

 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function maxVowels(arr, k) {
  let count = 0;
  let maxcount = 0;
  for (let i = 0; i < k; i++) {
    if ("aeiou".includes(arr[i])) {
      count++;
    }
  }
  maxcount = count;
  for (let i = k; i < arr.length; i++) {
    if ("aeiou".includes(arr[i-k])) {
      count--;
    }
    if ("aeiou".includes(arr[i])){
      count++;
    }

    maxcount = Math.max(count , maxcount)
  }

  return maxcount 
}

// Test cases
console.log("Max Vowels:", maxVowels("abciiidef", 3)); // Output: 3 ("iii")
console.log("Max Vowels:", maxVowels("aeiou", 2)); // Output: 2 ("ae")
console.log("Max Vowels:", maxVowels("leetcode", 3)); // Output: 2 ("lee", "eet", "ode")
console.log("Max Vowels:", maxVowels("rhythms", 4)); // Output: 0
