// Level 2: Variable Window
// Problem 5: Longest Repeating Character Replacement
// LeetCode 424: https://leetcode.com/problems/longest-repeating-character-replacement/
// Description: You are given a string s consisting of only uppercase English letters and an integer k.
// You can choose up to k characters of the string and replace them with any other uppercase English character.
// Find the length of the longest substring containing the same letter you can get after performing the above operations.

/**
 * Returns length of longest substring with same letter after at most k replacements.
 * Window validity check: (windowLength - maxFreq) <= k
 * 
 * @param {string} s
 * @param {number} k
 * @returns {number}
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(26) = O(1)
 */
function characterReplacement(s, k) {
  const freq = new Map();
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    freq.set(char, (freq.get(char) || 0) + 1);

    // Track the highest frequency character seen in the current window
    maxFreq = Math.max(maxFreq, freq.get(char));

    // Number of characters to replace = window length - maxFreq
    // If replacements needed > k, window is invalid -> shrink from left
    while ((right - left + 1) - maxFreq > k) {
      freq.set(s[left], freq.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log("Longest Repeating Replacement:", characterReplacement("ABAB", 2));    // Output: 4 ("AAAA" or "BBBB")
console.log("Longest Repeating Replacement:", characterReplacement("AABABBA", 1)); // Output: 4 ("AABA" -> "AAAA" or "ABBA" -> "BBBB")
