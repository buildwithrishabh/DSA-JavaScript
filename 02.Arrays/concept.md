# Arrays in DSA — Easy JavaScript Notes

> Goal: Understand Arrays deeply enough to solve common DSA interview problems in JavaScript.
>
> Study rule: Don't memorize solutions. Understand the pattern, then write the code yourself.

---

## 1. What is an Array?

An array stores multiple values under one variable.

```js
let arr = [10, 20, 30, 40, 50];
```

Think of it like boxes in a row:

```text
Index:   0    1    2    3    4
         ↓    ↓    ↓    ↓    ↓
Array:  [10] [20] [30] [40] [50]
```

### 0-based indexing

JavaScript arrays start from index `0`.

```js
arr[0] // 10
arr[2] // 30
```

Last index:

```js
arr.length - 1
```

---

## 2. Basic Operations

### Access

```js
console.log(arr[2]);
```

Time: **O(1)**

### Update

```js
arr[2] = 100;
```

Time: **O(1)**

### Traverse

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Time: **O(n)**

If you need only values:

```js
for (let value of arr) {
    console.log(value);
}
```

---

## 3. Array Complexity Cheat Sheet

| Operation | Time |
|---|---:|
| Access `arr[i]` | O(1) |
| Update `arr[i]` | O(1) |
| Linear search | O(n) |
| `push()` | O(1) amortized |
| `pop()` | O(1) |
| `shift()` | O(n) |
| `unshift()` | O(n) |
| Middle insert/delete | O(n) |
| Binary Search | O(log n) |

### Why is `shift()` O(n)?

```text
[10, 20, 30, 40]
```

After removing `10`:

```text
[20, 30, 40]
```

The remaining elements need to move.

---

## 4. Static vs Dynamic Arrays

Traditional fixed-size arrays have a fixed capacity.

JavaScript arrays are dynamic:

```js
let arr = [];

arr.push(10);
arr.push(20);
arr.push(30);
```

Dynamic arrays may resize internally.

So `push()` is generally **O(1) amortized**.

> Amortized means: some individual operations can be expensive, but the average cost over many operations stays O(1).

---

## 5. JavaScript Array Methods

### Add/remove at the end

```js
arr.push(50);
arr.pop();
```

### Add/remove at the beginning

```js
arr.unshift(5);
arr.shift();
```

### Insert/delete anywhere

```js
arr.splice(index, deleteCount);
```

Example:

```js
let arr = [10, 20, 30, 40];

arr.splice(1, 1);
```

Result:

```text
[10, 30, 40]
```

### Mutating methods

```text
push
pop
shift
unshift
splice
sort
reverse
```

### Usually non-mutating methods

```text
map
filter
slice
concat
```

---

## 6. The JavaScript `.sort()` Trap

Default `sort()` is not numeric sorting.

Use:

```js
arr.sort((a, b) => a - b);
```

Descending:

```js
arr.sort((a, b) => b - a);
```

---

# SEARCHING

## 7. Linear Search

Use when the array is unsorted or a simple scan is enough.

```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}
```

Time: **O(n)**

---

## 8. Binary Search

Binary Search works on a sorted search space.

Example:

```text
[10, 20, 30, 40, 50, 60, 70]
              ↑
             mid
```

If target is greater than `mid`, search right.

If target is smaller, search left.

### Template

```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

Time: **O(log n)**

### Binary Search topics to learn next

- First occurrence
- Last occurrence
- Lower bound
- Upper bound
- Search in rotated sorted array
- Find minimum in rotated sorted array
- Binary search on answer

---

# SORTING

## 9. Sorting Overview

Know the idea and complexity of these:

| Algorithm | Average | Worst |
|---|---:|---:|
| Bubble | O(n²) | O(n²) |
| Selection | O(n²) | O(n²) |
| Insertion | O(n²) | O(n²) |
| Merge | O(n log n) | O(n log n) |
| Quick | O(n log n) | O(n²) |

### Bubble Sort

Repeatedly swap adjacent elements that are in the wrong order.

```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}
```

### Selection Sort

Find the minimum and put it at the correct position.

### Insertion Sort

Build a sorted section one element at a time.

```text
Sorted | Unsorted
[2,5]  | [3,1,4]
```

### Merge Sort

```text
Divide → Sort → Merge
```

Time: **O(n log n)**

### Quick Sort

```text
Choose pivot → Partition → Recursively sort
```

Average: **O(n log n)**

---

# TWO POINTERS

## 10. Two Pointer Pattern

Two pointers means using two indexes to avoid unnecessary work.

### Opposite ends

```text
[1, 2, 3, 4, 5]
 ↑           ↑
left       right
```

### Reverse Array

```js
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr;
}
```

Time: **O(n)**  
Extra space: **O(1)**

---

## 11. Two Sum with Two Pointers

For a sorted array:

```text
[1, 2, 3, 4, 6]
target = 6
```

Rules:

```text
sum > target → right--
sum < target → left++
sum == target → found
```

Time: **O(n)** after the array is sorted.

---

## 12. Read/Write Pointer

One pointer reads every element.

Another pointer tells where the next useful element should go.

Useful for:

- Move Zeroes
- Remove Duplicates
- In-place filtering
- Partitioning

Example:

```text
[0, 1, 0, 3, 12]
```

Goal:

```text
[1, 3, 12, 0, 0]
```

---

# SLIDING WINDOW

## 13. Fixed Sliding Window

Use when the problem asks about a contiguous subarray of fixed size `k`.

Example:

```text
[2, 1, 5, 1, 3, 2]
k = 3
```

Windows:

```text
[2,1,5]
   [1,5,1]
      [5,1,3]
         [1,3,2]
```

Instead of recalculating each sum:

```text
new sum = old sum - leaving + entering
```

Time: **O(n)**

---

## 14. Dynamic Sliding Window

Use when window size changes.

Common clue:

```text
longest / shortest
+
contiguous / subarray
+
condition
```

Template:

```js
let left = 0;

for (let right = 0; right < arr.length; right++) {

    // add arr[right]

    while (/* window invalid */) {
        // remove arr[left]
        left++;
    }

    // update answer
}
```

---

# PREFIX / SUFFIX

## 15. Prefix Sum

Prefix sum stores cumulative sums.

```text
arr    = [2, 4, 1, 5]
prefix = [2, 6, 7, 12]
```

So:

```text
prefix[2] = 2 + 4 + 1 = 7
```

Range sum:

```text
sum(l...r) = prefix[r] - prefix[l-1]
```

Use a leading zero to make this easier:

```text
prefix = [0, 2, 6, 7, 12]
```

Then:

```text
sum(1...3) = prefix[4] - prefix[1]
           = 12 - 2
           = 10
```

---

## 16. Prefix Sum + HashMap

Important problem:

> Count subarrays whose sum equals `k`.

Core equation:

```text
currentPrefix - oldPrefix = k
```

Therefore:

```text
oldPrefix = currentPrefix - k
```

Store prefix sums in a `Map`.

Typical complexity:

```text
Time: O(n)
Space: O(n)
```

---

## 17. Suffix Sum

Build sums from right to left.

```text
arr    = [2, 4, 1, 5]
suffix = [12, 10, 6, 5]
```

Useful when you need information about elements to the right.

---

## 18. Difference Array

Useful when many range updates are required.

Instead of updating every element in `[l...r]`:

```text
diff[l] += value
diff[r + 1] -= value
```

Then use prefix sums to reconstruct the final array.

---

# KADANE / PARTITIONING

## 19. Kadane's Algorithm

Problem:

> Find maximum sum of a contiguous subarray.

Example:

```text
[-2,1,-3,4,-1,2,1,-5,4]
```

Best subarray:

```text
[4,-1,2,1]
```

Sum:

```text
6
```

At each element:

```text
Continue previous subarray
OR
Start a new subarray
```

```js
let current = arr[0];
let best = arr[0];

for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    best = Math.max(best, current);
}
```

Time: **O(n)**  
Space: **O(1)**

---

## 20. Dutch National Flag

Classic problem:

```text
Sort 0, 1, 2
```

Use three regions:

```text
0 region | 1 region | unknown | 2 region
```

Pointers:

```text
low
mid
high
```

Time: **O(n)**  
Space: **O(1)**

---

# HASHING

## 21. Frequency Counting

```js
let freq = new Map();

for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
}
```

Useful for:

- Frequency
- Duplicates
- Counting
- Grouping

---

## 22. Set for Duplicates

```js
let seen = new Set();

for (let num of arr) {
    if (seen.has(num)) {
        console.log("Duplicate");
    }

    seen.add(num);
}
```

---

## 23. Two Sum with HashMap

For an unsorted array:

```text
[2, 7, 11, 15]
target = 9
```

For each value:

```text
needed = target - current
```

If `needed` exists in the map, we found the pair.

```js
function twoSum(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let needed = target - arr[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(arr[i], i);
    }

    return [];
}
```

Time: **O(n)**  
Space: **O(n)**

---

# OTHER IMPORTANT PATTERNS

## 24. 3Sum / 4Sum

Common approach:

```text
Sort
 ↓
Fix one/two values
 ↓
Use Two Pointers
```

Important:

- Handle duplicates carefully.
- Sorting makes pointer movement easier.

---

## 25. Greedy

Greedy means making a locally useful choice and continuing.

Common array problems:

- Jump Game
- Gas Station
- Assign Cookies

When using greedy, ask:

```text
What choice am I making?
Why is it safe?
What information must I keep?
```

---

## 26. Monotonic Stack

Use when the problem asks:

```text
Next Greater
Next Smaller
Previous Greater
Previous Smaller
```

Common problems:

- Next Greater Element
- Daily Temperatures
- Stock Span
- Largest Rectangle in Histogram
- Trapping Rain Water

Mental clue:

> **Next greater/smaller → think Monotonic Stack.**

---

## 27. Intervals

Intervals look like:

```text
[1,3]
[2,6]
[8,10]
```

Common problems:

- Merge Intervals
- Insert Interval
- Meeting Rooms
- Overlapping Intervals

### Merge Intervals idea

1. Sort by start.
2. Compare with the last interval in the answer.
3. If they overlap, merge.
4. Otherwise add a new interval.

Example:

```text
[1,3]
[2,6]
```

Since:

```text
2 <= 3
```

merge:

```text
[1,6]
```

Typical complexity: **O(n log n)** because of sorting.

---

# 2D ARRAYS / MATRICES

## 28. Matrix

A matrix is an array of arrays.

```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

Think:

```text
       col
       0  1  2
row 0 [1, 2, 3]
row 1 [4, 5, 6]
row 2 [7, 8, 9]
```

Access:

```js
matrix[row][col]
```

---

## 29. Matrix Traversal

```js
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(matrix[row][col]);
    }
}
```

For `r × c` matrix:

```text
Time = O(r × c)
```

Important matrix topics:

- Traversal
- Search
- Transpose
- Rotate 90°
- Spiral Matrix
- Set Matrix Zeroes
- 2D Prefix Sum

---

# IN-PLACE / CYCLIC SORT

## 30. In-Place Techniques

In-place means using the existing array with little extra memory.

Examples:

- Reverse
- Move Zeroes
- Sort 0/1/2
- Rotate Array
- Remove Duplicates
- Merge Sorted Arrays

Always ask:

> Can I solve this without creating another array?

---

## 31. Cyclic Sort

Useful when values are in a known range such as:

```text
1 ... n
```

Common problems:

- Missing Number
- Find Duplicate
- Find All Missing Numbers
- Find Disappeared Numbers

Mental model:

```text
value 1 → index 0
value 2 → index 1
value 3 → index 2
```

---

# IMPORTANT PROBLEMS

## 32. Practice by Pattern

### Fundamentals

- Find Maximum
- Find Minimum
- Sum of Array
- Reverse Array
- Second Largest
- Linear Search

### Two Pointers

- Reverse Array
- Two Sum II
- Remove Duplicates
- Move Zeroes
- Container With Most Water
- 3Sum

### Sliding Window

- Maximum Sum Subarray of Size K
- Minimum Size Subarray Sum
- Longest Subarray with Condition
- Maximum Consecutive Ones

### Prefix Sum

- Range Sum
- Subarray Sum Equals K
- Prefix/Suffix product problems

### Hashing

- Two Sum
- Contains Duplicate
- Frequency Count
- Longest Consecutive Sequence
- Subarray Sum Equals K

### Kadane

- Maximum Subarray
- Maximum Circular Subarray
- Maximum Product Subarray

### Sorting / Intervals

- Merge Intervals
- Insert Interval
- Sort Colors
- Merge Sorted Arrays
- Meeting Rooms

### Monotonic Stack

- Next Greater Element
- Daily Temperatures
- Stock Span
- Largest Rectangle in Histogram
- Trapping Rain Water

### Matrix

- Spiral Matrix
- Rotate Image
- Transpose Matrix
- Set Matrix Zeroes
- Search a 2D Matrix

---

# PATTERN RECOGNITION

## 33. How to Choose the Pattern

| Clue | Think |
|---|---|
| Need every element | Traversal |
| Sorted + search | Binary Search |
| Pair from two ends | Two Pointers |
| Contiguous + fixed size | Fixed Sliding Window |
| Contiguous + longest/shortest | Dynamic Sliding Window |
| Repeated range sum | Prefix Sum |
| Subarray sum = K | Prefix Sum + HashMap |
| Frequency / duplicate | Map / Set |
| Maximum contiguous sum | Kadane |
| 0/1/2 partition | Dutch National Flag |
| Next greater/smaller | Monotonic Stack |
| Overlapping ranges | Intervals |
| Values 1...n | Cyclic Sort |
| Grid / rows / columns | Matrix |
| Local best choice | Greedy |

---

# COMPLEXITY

## 34. Time Complexity Mental Model

One loop:

```js
for (...) {}
```

Usually:

```text
O(n)
```

Nested loops:

```js
for (...) {
    for (...) {}
}
```

Usually:

```text
O(n²)
```

Repeatedly halving:

```text
n → n/2 → n/4 → n/8
```

Usually:

```text
O(log n)
```

Sorting + scanning:

```text
O(n log n)
```

---

## 35. Space Complexity

Space means **extra memory**.

```js
let total = 0;
```

Extra space:

```text
O(1)
```

If you create another structure containing `n` elements:

```text
O(n)
```

Example:

```js
let result = [];
```

If it grows to `n` elements, extra space is **O(n)**.

---

# JAVASCRIPT PITFALLS

## 36. Repeated `shift()`

Avoid:

```js
while (arr.length > 0) {
    arr.shift();
}
```

Repeated shifting can make the total work **O(n²)**.

Prefer index/pointer-based processing when possible.

---

## 37. `delete arr[i]`

```js
delete arr[2];
```

This creates a hole.

If you want actual removal:

```js
arr.splice(2, 1);
```

---

## 38. Mutating While Iterating

Be careful when deleting elements from the same array you are currently traversing.

Indexes can move and elements can be skipped.

---

## 39. Array Reference vs Copy

This:

```js
let b = arr;
```

does not create a new array.

Both variables point to the same array.

Use:

```js
let b = [...arr];
```

or:

```js
let b = arr.slice();
```

for a shallow copy.

---

# EDGE CASES

## 40. Always Check These

```text
Empty array?
One element?
All values same?
Duplicates?
All negative?
Target missing?
k = 0?
k > array length?
Already sorted?
Reverse sorted?
```

These cases catch many bugs.

---

# PROBLEM-SOLVING PROCESS

## 41. Don't Code Immediately

When you get an array question:

### Step 1 — Understand

What exactly is being asked?

### Step 2 — Inspect the input

Ask:

```text
Sorted?
Duplicates?
Positive/negative?
Contiguous?
Known value range?
```

### Step 3 — Identify the clue

```text
Pair              → Two Pointers / HashMap
Contiguous        → Sliding Window / Prefix Sum
Sorted            → Binary Search / Two Pointers
Frequency         → Map / Set
Next greater      → Monotonic Stack
Maximum subarray  → Kadane
Overlapping       → Intervals
1...n             → Cyclic Sort
Grid              → Matrix
```

### Step 4 — Start with brute force

Make sure the simple solution is correct.

### Step 5 — Ask

> Can I remove repeated work?

Examples:

```text
Nested loop
→ Can Map help?

Repeated range sum
→ Prefix Sum?

Repeated contiguous calculation
→ Sliding Window?

Sorted array
→ Binary Search / Two Pointers?
```

### Step 6 — Test edge cases

Then calculate:

```text
Time Complexity
Space Complexity
```

---

# BRUTE FORCE → OPTIMIZATION

## 42. Example: Two Sum

Brute force:

```text
Check every pair
```

Time:

```text
O(n²)
```

Better:

```text
HashMap
```

Time:

```text
O(n)
```

Or, if sorting is allowed:

```text
Sort + Two Pointers
```

Time:

```text
O(n log n)
```

The key DSA skill is:

```text
Slow solution
     ↓
Find repeated work
     ↓
Choose a pattern
     ↓
Optimize
```

---

# ARRAY VS OTHER DATA STRUCTURES

## 43. Quick Comparison

| Structure | Good For |
|---|---|
| Array | Fast index access |
| Linked List | Insert/delete with known node |
| HashMap | Fast key lookup |
| Set | Unique values / membership |
| Stack | LIFO |
| Queue | FIFO |
| Heap | Min/Max priority |
| Tree | Hierarchical data |
| Graph | Relationships |

An array problem can still need:

```text
Array + Map
Array + Set
Array + Stack
Array + Queue
```

---

# LEARNING ROADMAP

## 44. Learn in This Order

### Level 1 — Fundamentals

- Indexing
- Traversal
- Access/update
- Insert/delete
- Min/max
- Reverse
- Linear Search
- Complexity

### Level 2 — Core Patterns

- Two Pointers
- Sliding Window
- Prefix Sum
- HashMap / Set
- Kadane

### Level 3 — Searching & Sorting

- Binary Search
- Binary Search variations
- Bubble / Selection / Insertion
- Merge Sort
- Quick Sort

### Level 4 — Advanced Patterns

- Difference Array
- Dutch National Flag
- Cyclic Sort
- Monotonic Stack
- Greedy
- Intervals

### Level 5 — 2D Arrays

- Matrix traversal
- Transpose
- Rotate
- Spiral
- Matrix Search
- 2D Prefix Sum

---

# ARRAY PATTERN DECISION TREE

## 45. Quick Decision Tree

```text
ARRAY PROBLEM
     |
     v
Is it sorted?
   /     \
 Yes      No
 |         |
 v         v
Binary     Frequency /
Search?    Duplicate?
 |          /       \
Yes       Yes        No
 |         |          |
Binary    Map/Set     |
Search               |
                     v
              Is it contiguous?
                /          \
              Yes           No
               |             |
               v             v
         Sliding Window   Two Pointers
         / Prefix Sum     / HashMap

Other clues:

Next greater/smaller
        ↓
Monotonic Stack

Maximum subarray
        ↓
Kadane

Overlapping ranges
        ↓
Intervals

Values 1...n
        ↓
Cyclic Sort

Grid
        ↓
Matrix
```

---

# FINAL CHECKLIST

## 46. Before Saying "I Know Arrays"

### Fundamentals

- [ ] Indexing
- [ ] Traversal
- [ ] Access/update
- [ ] Insert/delete
- [ ] Time complexity
- [ ] Space complexity

### Searching

- [ ] Linear Search
- [ ] Binary Search
- [ ] First/Last occurrence
- [ ] Lower/Upper bound
- [ ] Rotated array search

### Sorting

- [ ] Bubble Sort
- [ ] Selection Sort
- [ ] Insertion Sort
- [ ] Merge Sort
- [ ] Quick Sort

### Patterns

- [ ] Two Pointers
- [ ] Sliding Window
- [ ] Prefix Sum
- [ ] Suffix Sum
- [ ] Difference Array
- [ ] HashMap / Set
- [ ] Kadane
- [ ] Dutch National Flag
- [ ] Cyclic Sort
- [ ] Monotonic Stack
- [ ] Greedy
- [ ] Intervals

### Matrix

- [ ] Traversal
- [ ] Transpose
- [ ] Rotate
- [ ] Spiral
- [ ] Matrix Search
- [ ] 2D Prefix Sum

### Problem Solving

- [ ] Start with brute force
- [ ] Find repeated work
- [ ] Identify the pattern
- [ ] Optimize
- [ ] Check edge cases
- [ ] Calculate time complexity
- [ ] Calculate space complexity

---

# 47. Golden Rules

1. **Don't memorize solutions; understand the pattern.**
2. **Check constraints before choosing an approach.**
3. **Sorted array → Binary Search / Two Pointers.**
4. **Contiguous subarray → Sliding Window / Prefix Sum.**
5. **Frequency or duplicate → Map / Set.**
6. **Next greater/smaller → Monotonic Stack.**
7. **Maximum contiguous sum → Kadane.**
8. **Overlapping ranges → Intervals.**
9. **Values in `1...n` → Cyclic Sort.**
10. **Try brute force first, then remove repeated work.**
11. **Always test empty arrays, duplicates, negatives, and single-element cases.**
12. **Write the solution yourself after understanding it.**

---

# 48. One-Line Mental Model

> **Arrays are not just about loops. The real skill is recognizing which pattern turns a slow array solution into an efficient one.**

```text
Array
 |
 +-- Search       → Linear / Binary Search
 |
 +-- Pair         → Two Pointers / HashMap
 |
 +-- Contiguous   → Sliding Window / Prefix Sum
 |
 +-- Frequency    → Map / Set
 |
 +-- Max Subarray → Kadane
 |
 +-- Partition    → Dutch National Flag
 |
 +-- Next Greater → Monotonic Stack
 |
 +-- Overlap      → Intervals
 |
 +-- 1...n        → Cyclic Sort
 |
 +-- Grid         → Matrix
```

**Study these patterns by solving problems, not by memorizing code.**
