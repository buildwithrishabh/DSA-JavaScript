# Time & Space Complexity — JavaScript / DSA Notes

> A practical, interview-focused guide to understanding **Big-O, time complexity, space complexity, JavaScript operation costs, and common complexity patterns**.

---

## 📚 Table of Contents

- [1. What Is Time Complexity?](#1-what-is-time-complexity)
- [2. Why Don't We Measure Time in Seconds?](#2-why-dont-we-measure-time-in-seconds)
- [3. Big-O, Big-Omega & Big-Theta](#3-big-o-big-omega--big-theta)
- [4. Rules for Calculating Big-O](#4-rules-for-calculating-big-o)
- [5. Common Time Complexities](#5-common-time-complexities)
  - [O(1) — Constant](#o1--constant)
  - [O(log N) — Logarithmic](#olog-n--logarithmic)
  - [O(N) — Linear](#on--linear)
  - [O(N log N) — Linearithmic](#on-log-n--linearithmic)
  - [O(N²) — Quadratic](#on²--quadratic)
  - [O(2ᴺ) — Exponential](#o2ᴺ--exponential)
  - [O(N!) — Factorial](#on--factorial)
- [6. Space Complexity](#6-space-complexity)
- [7. JavaScript Operations — Quick Reference](#7-javascript-operations--quick-reference)
- [8. Common Complexity Mistakes](#8-common-complexity-mistakes)
- [9. Practice Problems](#9-practice-problems)
- [10. Time–Space Trade-off](#10-timespace-trade-off)
- [11. Interview Cheat Sheet](#11-interview-cheat-sheet)

---

# 1. What Is Time Complexity?

### Simple Definition

**Time complexity tells us how the number of operations performed by an algorithm grows as the input size `N` grows.**

It does **not** mean the exact number of seconds or milliseconds the program takes.

For example:

```javascript
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

If `arr` contains:

- `10` elements → roughly `10` loop iterations
- `1,000` elements → roughly `1,000` loop iterations
- `1,000,000` elements → roughly `1,000,000` loop iterations

So the algorithm grows **linearly** with the input.

**Time Complexity: `O(N)`**

---

# 2. Why Don't We Measure Time in Seconds?

You can measure actual execution time using JavaScript:

```javascript
console.time("timer");

myCode();

console.timeEnd("timer");
```

But the result can change depending on:

- CPU speed
- RAM
- operating system
- background processes
- JavaScript runtime
- compiler/runtime optimizations
- input characteristics

The same algorithm might take `5ms` on one machine and `50ms` on another.

That's why DSA focuses on **growth rate** rather than exact execution time.

> **Key idea:** We care about how an algorithm behaves when `N` becomes very large.

---

# 3. Big-O, Big-Omega & Big-Theta

These notations describe how an algorithm grows as the input size increases.

| Notation | Meaning | Simple interpretation |
|---|---|---|
| `O(...)` | Upper-bound / asymptotic growth | How the algorithm can grow at most, commonly used for worst-case analysis |
| `Ω(...)` | Lower-bound / asymptotic growth | A lower bound on growth |
| `Θ(...)` | Tight bound | Both upper and lower bounds match asymptotically |

### Important Interview Note

In interviews, when someone asks:

> "What is the time complexity?"

they usually expect the **Big-O complexity**, often for the **worst-case scenario**.

For example, linear search:

```javascript
function findItem(arr, target) {
  for (const item of arr) {
    if (item === target) return true;
  }

  return false;
}
```

- Best case: `Ω(1)` — target is the first element
- Worst case: `O(N)` — target is at the end or absent
- Tight worst-case bound: `Θ(N)`

---

# 4. Rules for Calculating Big-O

## Rule 1 — Ignore Constants

Constants become less important as `N` becomes very large.

```text
O(2N)      → O(N)
O(3N + 10) → O(N)
O(500)     → O(1)
```

### Example

```javascript
for (let i = 0; i < 2 * n; i++) {
  console.log(i);
}
```

The loop runs `2N` times.

So:

```text
O(2N) → O(N)
```

---

## Rule 2 — Keep the Dominant Term

Consider:

```text
O(N² + N)
```

As `N` becomes large, `N²` grows much faster than `N`.

Therefore:

```text
O(N² + N) → O(N²)
```

Another example:

```text
O(N + log N) → O(N)
```

> **Rule:** Keep the term that grows fastest.

---

## Rule 3 — Different Inputs Need Different Variables

Suppose a function receives two arrays:

```javascript
function compare(arrA, arrB) {
  for (const item of arrA) {
    console.log(item);
  }

  for (const item of arrB) {
    console.log(item);
  }
}
```

If:

- `arrA` has `A` elements
- `arrB` has `B` elements

Then:

```text
Time = O(A + B)
```

Do **not** automatically write `O(N)` unless both inputs are represented by the same `N`.

### Nested loops with different inputs

```javascript
function compare(arrA, arrB) {
  for (const a of arrA) {
    for (const b of arrB) {
      console.log(a, b);
    }
  }
}
```

Time complexity:

```text
O(A × B)
```

---

## Rule 4 — Analyze the Worst Case When Asked for Big-O

For linear search:

```javascript
function search(arr, target) {
  for (const item of arr) {
    if (item === target) {
      return true;
    }
  }

  return false;
}
```

The target might be:

1. First element → `O(1)`
2. Middle → `O(N)`
3. Last element → `O(N)`
4. Not present → `O(N)`

So the commonly reported worst-case complexity is:

```text
O(N)
```

---

# 5. Common Time Complexities

From generally faster growth to slower growth:

```text
O(1)
   ↓
O(log N)
   ↓
O(N)
   ↓
O(N log N)
   ↓
O(N²)
   ↓
O(2ᴺ)
   ↓
O(N!)
```

The exact performance still depends on the operation, constants, input constraints, and implementation.

---

## O(1) — Constant

The number of operations does not grow with `N`.

### Example 1 — Array Index Access

```javascript
function getFirst(arr) {
  return arr[0];
}
```

Time:

```text
O(1)
```

Whether the array contains `10` elements or `10 million` elements, accessing `arr[0]` is a constant-time operation.

### Example 2 — Object Property Access

```javascript
const user = {
  name: "Rahul",
  age: 22
};

console.log(user.name);
```

Typical average-case lookup:

```text
O(1)
```

### Example 3 — Simple Arithmetic

```javascript
function isEven(num) {
  return num % 2 === 0;
}
```

Time:

```text
O(1)
```

### Remember

```text
No input-dependent loop
        ↓
O(1)
```

---

# O(log N) — Logarithmic

An algorithm is often `O(log N)` when it repeatedly **reduces the remaining search space by a constant factor**, such as half.

### Real-World Analogy

Imagine searching for a word in a dictionary.

You don't start from page 1 and check every page.

Instead:

1. Open the middle.
2. Decide whether the word is before or after it.
3. Discard half the pages.
4. Repeat.

That is the idea behind **Binary Search**.

### Binary Search

> The array must be sorted.

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

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

Each iteration removes approximately half of the remaining search space.

```text
N
N/2
N/4
N/8
...
1
```

Therefore:

```text
Time: O(log N)
Space: O(1)
```

### Useful intuition

For about `1,000,000` sorted items:

```text
log₂(1,000,000) ≈ 20
```

So binary search needs only around 20 iterations in the worst case.

---

# O(N) — Linear

The number of operations grows approximately in proportion to the input size.

### Example

```javascript
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

If:

```text
N = 10     → ~10 iterations
N = 1,000  → ~1,000 iterations
N = 1M     → ~1M iterations
```

Therefore:

```text
Time: O(N)
```

### Linear Search

```javascript
function findItem(arr, target) {
  for (const item of arr) {
    if (item === target) {
      return true;
    }
  }

  return false;
}
```

Worst-case:

```text
O(N)
```

---

# O(N log N) — Linearithmic

This complexity commonly appears in efficient comparison-based sorting algorithms.

Typical examples include:

- Merge Sort
- Heap Sort
- Quick Sort — average-case `O(N log N)`
- JavaScript's `Array.prototype.sort()` — implementation-dependent; do not blindly assume a specific sorting algorithm such as Timsort

### Intuition

A common `N log N` algorithm does something like:

```text
Divide the problem
       ↓
log N levels
       ↓
Process about N elements at each level
       ↓
N × log N
```

### Example

```javascript
const nums = [5, 1, 9, 3, 7];

nums.sort((a, b) => a - b);
```

For DSA analysis, sorting is commonly treated as:

```text
O(N log N)
```

unless the problem or language/runtime documentation gives a more specific guarantee.

---

# O(N²) — Quadratic

Quadratic complexity commonly appears when a loop runs inside another loop over the same input.

```javascript
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

Outer loop:

```text
N times
```

Inner loop:

```text
N times for every outer iteration
```

Total:

```text
N × N = N²
```

Therefore:

```text
O(N²)
```

### Why it becomes expensive

```text
N = 10     → 100 operations
N = 100    → 10,000 operations
N = 1,000  → 1,000,000 operations
```

> **Important:** Two loops do not automatically mean `O(N²)`. If the loops are sequential, the complexity is usually `O(N)`, not `O(N²)`.

Example:

```javascript
for (let i = 0; i < n; i++) {
  // O(N)
}

for (let i = 0; i < n; i++) {
  // O(N)
}
```

Total:

```text
O(N + N)
→ O(2N)
→ O(N)
```

---

# O(2ᴺ) — Exponential

Exponential algorithms can become impractical very quickly.

A common example is naive recursive Fibonacci:

```javascript
function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
```

Each call creates multiple additional calls:

```text
fib(n)
├── fib(n - 1)
│   ├── fib(n - 2)
│   └── fib(n - 3)
└── fib(n - 2)
    ├── fib(n - 3)
    └── fib(n - 4)
```

The recursion tree grows exponentially.

A commonly used upper-bound description for naive recursive Fibonacci is:

```text
O(2ᴺ)
```

> More precise analyses can give tighter bounds, but `O(2ᴺ)` is useful for understanding why this naive approach scales poorly.

---

# O(N!) — Factorial

Factorial complexity appears when an algorithm tries a large number of possible permutations.

For example, the number of permutations of `N` elements is:

```text
N!
```

Growth becomes enormous very quickly:

```text
5!  = 120
10! = 3,628,800
20! = 2,432,902,008,176,640,000
```

This is why brute-forcing every permutation becomes infeasible for even moderately large `N`.

---

# 6. Space Complexity

## What Is Space Complexity?

Space complexity measures how much memory an algorithm needs as the input size grows.

When discussing **auxiliary space**, we focus on the **extra memory used by the algorithm**, such as:

- additional arrays
- objects
- maps/sets
- temporary data structures
- recursion call stack

### Important distinction

If an input array is passed to a function, we normally don't count the input itself as auxiliary space.

We count the **additional memory created by the algorithm**.

---

## O(1) Space — Constant Extra Space

```javascript
function sumArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```

Extra variables:

```text
total
i
```

The amount of extra memory does not grow with `N`.

Therefore:

```text
Space: O(1)
```

---

## O(N) Space — Linear Extra Space

```javascript
function doubleValues(arr) {
  const result = [];

  for (const item of arr) {
    result.push(item * 2);
  }

  return result;
}
```

The `result` array grows with the input.

Therefore:

```text
Space: O(N)
```

---

## Recursion and Call Stack

Every recursive function call uses stack memory.

```javascript
function countdown(n) {
  if (n === 0) {
    return;
  }

  countdown(n - 1);
}
```

For `n` calls:

```text
countdown(n)
countdown(n - 1)
countdown(n - 2)
...
countdown(0)
```

Maximum stack depth:

```text
O(N)
```

Therefore:

```text
Space: O(N)
```

---

# 7. JavaScript Operations — Quick Reference

> These are useful **typical/average-case** costs for interview reasoning. Exact guarantees can depend on the JavaScript engine and operation.

## Arrays

| Operation | Typical Complexity |
|---|---:|
| `arr[i]` | `O(1)` |
| `arr.push()` | `O(1)` amortized |
| `arr.pop()` | `O(1)` |
| `arr.unshift()` | `O(N)` |
| `arr.shift()` | `O(N)` |
| `arr.slice()` | `O(K)` |
| `arr.indexOf()` | `O(N)` |
| `arr.includes()` | `O(N)` |
| `arr.sort()` | Usually analyzed as `O(N log N)` for comparison sorting |

### Common Mistake

Avoid repeatedly using `shift()` or `unshift()` inside a large loop:

```javascript
while (arr.length > 0) {
  arr.shift();
}
```

Each `shift()` may require elements to be moved.

This can result in:

```text
O(N²)
```

for the overall operation.

---

## Objects, Maps & Sets

Typical average-case lookup/update costs:

| Operation | Typical Average Case |
|---|---:|
| `obj[key]` lookup | `O(1)` |
| `obj[key] = value` | `O(1)` |
| `Map.get(key)` | `O(1)` |
| `Map.set(key, value)` | `O(1)` |
| `Map.has(key)` | `O(1)` |
| `Set.has(value)` | `O(1)` |
| `Set.add(value)` | `O(1)` |

> These are average-case expectations, not a universal guarantee that every possible operation is always exactly `O(1)`.

---

# 8. Common Complexity Mistakes

## Mistake 1 — Thinking Every Two Loops Means O(N²)

### Sequential loops

```javascript
for (let i = 0; i < n; i++) {
  // O(N)
}

for (let i = 0; i < n; i++) {
  // O(N)
}
```

Total:

```text
O(N + N)
= O(2N)
= O(N)
```

### Nested loops

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // O(1)
  }
}
```

Total:

```text
O(N²)
```

---

## Mistake 2 — Not Looking at How the Loop Variable Changes

```javascript
for (let i = 1; i < n; i *= 2) {
  console.log(i);
}
```

Values look like:

```text
1
2
4
8
16
32
...
```

The value doubles every iteration.

Therefore:

```text
O(log N)
```

---

## Mistake 3 — Counting `N/2` as O(N/2)

```javascript
for (let i = 0; i < n; i += 2) {
  console.log(i);
}
```

The loop runs approximately `N/2` times.

But constants are ignored:

```text
O(N/2)
→ O(N)
```

---

## Mistake 4 — Forgetting Space Complexity

An algorithm can improve time by using additional memory.

Example:

```javascript
const seen = new Set();

for (const item of arr) {
  seen.add(item);
}
```

Typical complexity:

```text
Time:  O(N)
Space: O(N)
```

---

# 9. Practice Problems

## Q1 — What is the Time Complexity?

```javascript
function test1(n) {
  for (let i = 0; i < n; i += 2) {
    console.log(i);
  }
}
```

### Answer

```text
O(N)
```

Why?

The loop runs approximately `N/2` times:

```text
O(N/2)
→ O(N)
```

---

## Q2 — What is the Time Complexity?

```javascript
function test2(n) {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}
```

### Answer

```text
O(log N)
```

Because `i` doubles each iteration:

```text
1 → 2 → 4 → 8 → 16 → ...
```

---

## Q3 — Find Time and Space Complexity

```javascript
function test3(arr) {
  const seen = {};

  for (const x of arr) {
    seen[x] = true;
  }

  return seen;
}
```

### Answer

```text
Time:  O(N)
Space: O(N)
```

Why?

- The loop processes `N` elements.
- `seen` can store up to `N` distinct values.

---

# 10. Time–Space Trade-off

Sometimes we use **more memory to reduce execution time**.

This is one of the most important ideas in DSA.

### Example: Finding Duplicates

A naive approach may compare every element with every other element:

```text
Time: O(N²)
Space: O(1)
```

Using a `Set`:

```javascript
function hasDuplicate(arr) {
  const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      return true;
    }

    seen.add(item);
  }

  return false;
}
```

Typical complexity:

```text
Time:  O(N)
Space: O(N)
```

We use extra memory to avoid repeatedly comparing elements.

### The core idea

```text
More Space
    ↓
Faster Lookup
    ↓
Less Time
```

This is called a **time–space trade-off**.

---

# 11. Interview Cheat Sheet

## Complexity Table

| Pattern | Complexity |
|---|---:|
| Direct array index access | `O(1)` |
| Simple arithmetic | `O(1)` |
| Hash/Map/Set lookup — typical average case | `O(1)` |
| Binary search | `O(log N)` |
| One full loop | `O(N)` |
| Two sequential full loops | `O(N)` |
| Efficient comparison sorting | `O(N log N)` |
| Nested loops over the same input | `O(N²)` |
| Naive branching recursion | Often `O(2ᴺ)` |
| Generating all permutations | `O(N!)` |

---

## Fast Pattern Recognition

### Pattern 1 — No loop

```javascript
return arr[0];
```

→ `O(1)`

### Pattern 2 — One loop

```javascript
for (...) {
  // ...
}
```

→ Usually `O(N)`

### Pattern 3 — Nested loops

```javascript
for (...) {
  for (...) {
    // ...
  }
}
```

→ Often `O(N²)`

### Pattern 4 — Value doubles/halves

```javascript
i *= 2;
```

or

```javascript
n /= 2;
```

→ Usually `O(log N)`

### Pattern 5 — Sorting

```javascript
arr.sort(...)
```

→ Commonly analyzed as `O(N log N)`

### Pattern 6 — Recursion with two branches

```javascript
solve(n - 1);
solve(n - 2);
```

→ Often exponential without memoization

---

# 🧠 Golden Rules

1. **Ignore constants.**
2. **Keep the dominant term.**
3. **Different inputs → different variables.**
4. **Sequential loops usually add.**
5. **Nested loops usually multiply.**
6. **Repeatedly halving/doubling the search space often means `O(log N)`.**
7. **Always check both time and extra space.**
8. **Use `Map`/`Set` when extra memory can reduce repeated searching.**
9. **For recursion, analyze both the number of calls and the recursion depth.**
10. **Always check the problem constraints before deciding whether a complexity is acceptable.**

---

# 🎯 Final Mental Model

When you see a piece of code, ask these questions:

```text
1. How many times does this code execute?
                ↓
2. Does the number of operations depend on N?
                ↓
3. Are loops sequential or nested?
                ↓
4. Does the input size get divided/multiplied?
                ↓
5. Is there recursion?
                ↓
6. Is extra memory being created?
                ↓
7. What is the dominant growth rate?
                ↓
      Time + Space Complexity
```

### One-line memory trick

```text
Direct access      → O(1)
Half each time     → O(log N)
One pass           → O(N)
Sort               → O(N log N)
Nested comparison  → O(N²)
Branching recursion→ O(2ᴺ)
All permutations   → O(N!)
```

---

> **Interview Tip:** Don't memorize complexity names alone. Look at the **code pattern**, understand how the number of operations grows with `N`, and then derive the complexity.
