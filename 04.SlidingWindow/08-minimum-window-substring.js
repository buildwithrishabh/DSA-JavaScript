// Level 3: Frequency Map (Variable Window)
// Problem 8: Minimum Window Substring
// LeetCode 76: https://leetcode.com/problems/minimum-window-substring/
// Description: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s
// such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return the empty string "".

/**
 * Finds the minimum window substring of s containing all characters of t.
 * 
 * @param {string} s
 * @param {string} t
 * @returns {string}
 * 
 * Time Complexity: O(m + n) where m = s.length, n = t.length
 * Space Complexity: O(k) where k is the number of unique characters in t
 */
function minWindow(s, t) {
  if (!s || !t || s.length < t.length) return "";

  // Target character frequency map for string t
  const targetMap = new Map();
  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  const required = targetMap.size; // number of unique characters in t that need to meet frequency
  let formed = 0;                  // number of unique characters currently meeting target frequency

  const windowCounts = new Map();
  let left = 0;
  let minLen = Infinity;
  let minStart = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // If the frequency of current char matches target frequency in t
    if (targetMap.has(char) && windowCounts.get(char) === targetMap.get(char)) {
      formed++;
    }

    // Try to shrink the window from left as long as all required chars are present
    while (left <= right && formed === required) {
      // Update smallest window found so far
      const currentLen = right - left + 1;
      if (currentLen < minLen) {
        minLen = currentLen;
        minStart = left;
      }

      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

      if (targetMap.has(leftChar) && windowCounts.get(leftChar) < targetMap.get(leftChar)) {
        formed--;
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Test cases
console.log("Min Window:", minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log("Min Window:", minWindow("a", "a"));               // Output: "a"
console.log("Min Window:", minWindow("a", "aa"));              // Output: ""
