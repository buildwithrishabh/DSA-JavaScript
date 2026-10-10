// Level 2: Variable Window
// Problem 4: Longest Substring Without Repeating Characters
// LeetCode 3: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Description: Given a string s, find the length of the longest substring without repeating characters.

/**
 * Time Complexity: O(n)
 * Space Complexity: O(min(m, n)) where m is charset size
 */
function lengthOfLongestSubstring(s) {
  
}

// Test cases
console.log("Longest Unique Substring:", lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log("Longest Unique Substring:", lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
console.log("Longest Unique Substring:", lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
console.log("Longest Unique Substring:", lengthOfLongestSubstring(""));         // Output: 0
