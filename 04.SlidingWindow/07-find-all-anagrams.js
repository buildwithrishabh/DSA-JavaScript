// Level 3: Frequency Map (Fixed Window)
// Problem 7: Find All Anagrams in a String
// LeetCode 438: https://leetcode.com/problems/find-all-anagrams-in-a-string/
// Description: Given two strings s and p, return an array of all the start indices of p's anagrams in s.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

/**
 * Finds all start indices of anagrams of p in s.
 * Window size is fixed to p.length.
 * 
 * @param {string} s
 * @param {string} p
 * @returns {number[]}
 * 
 * Time Complexity: O(n) where n is s.length
 * Space Complexity: O(1) (size 26 arrays)
 */
function findAnagrams(s, p) {
  const result = [];
  const sLen = s.length;
  const pLen = p.length;

  if (sLen < pLen) return result;

  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);
  const getCode = (char) => char.charCodeAt(0) - 97;

  // Build target frequency and first window frequency
  for (let i = 0; i < pLen; i++) {
    pCount[getCode(p[i])]++;
    sCount[getCode(s[i])]++;
  }

  // Helper to compare frequency arrays
  const isMatch = () => {
    for (let i = 0; i < 26; i++) {
      if (pCount[i] !== sCount[i]) return false;
    }
    return true;
  };

  if (isMatch()) {
    result.push(0);
  }

  // Slide window across s
  for (let i = pLen; i < sLen; i++) {
    sCount[getCode(s[i])]++;         // Include right char
    sCount[getCode(s[i - pLen])]--;  // Remove left char

    if (isMatch()) {
      result.push(i - pLen + 1);
    }
  }

  return result;
}

// Test cases
console.log("Find Anagrams:", findAnagrams("cbaebabacd", "abc")); // Output: [0, 6] (cba at 0, bac at 6)
console.log("Find Anagrams:", findAnagrams("abab", "ab"));         // Output: [0, 1, 2] (ab at 0, ba at 1, ab at 2)
