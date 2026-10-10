// Level 3: Frequency Map (Fixed Window)
// Problem 6: Permutation in String
// LeetCode 567: https://leetcode.com/problems/permutation-in-string/
// Description: Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * Checks if s2 contains a permutation of s1.
 * Window size is fixed to s1.length.
 * 
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 * 
 * Time Complexity: O(n) where n is s2.length
 * Space Complexity: O(1) (26 characters frequency array)
 */
function checkInclusion(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) return false;

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  const getCode = (char) => char.charCodeAt(0) - 97;

  // Initialize frequency for s1 and the first window of s2
  for (let i = 0; i < len1; i++) {
    count1[getCode(s1[i])]++;
    count2[getCode(s2[i])]++;
  }

  // Count how many matching frequencies we have across 26 chars
  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (count1[i] === count2[i]) matches++;
  }

  // Slide fixed window of size len1
  for (let i = 0; i < len2 - len1; i++) {
    if (matches === 26) return true;

    // Incoming character at right index (i + len1)
    const rightChar = getCode(s2[i + len1]);
    count2[rightChar]++;
    if (count2[rightChar] === count1[rightChar]) {
      matches++;
    } else if (count2[rightChar] === count1[rightChar] + 1) {
      matches--;
    }

    // Outgoing character at left index (i)
    const leftChar = getCode(s2[i]);
    count2[leftChar]--;
    if (count2[leftChar] === count1[leftChar]) {
      matches++;
    } else if (count2[leftChar] === count1[leftChar] - 1) {
      matches--;
    }
  }

  return matches === 26;
}

// Test cases
console.log("Check Inclusion:", checkInclusion("ab", "eidbaooo")); // Output: true ("ba")
console.log("Check Inclusion:", checkInclusion("ab", "eidboaoo")); // Output: false
