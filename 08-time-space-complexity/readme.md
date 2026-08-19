# DSA Time Complexity & Space Complexity — Easy Notes

# 1. What is Complexity?

When we write a program, we mainly care about two things:

### ⏱️ Time Complexity

**How much time does our algorithm take as input size increases?**

Example:

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

If `n = 10` → loop runs 10 times.

If `n = 1000` → loop runs 1000 times.

So:

```text
Time Complexity = O(n)
```

---

### 💾 Space Complexity

**How much extra memory does our algorithm use as input size increases?**

Example:

```js
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(i);
}
```

We are creating an extra array of size `n`.

Therefore:

```text
Space Complexity = O(n)
```

---

# 2. The Most Important Idea

## Don't count exact seconds.

We don't care whether code takes:

```text
0.001 seconds
0.002 seconds
0.01 seconds
```

We care about **how the algorithm grows when `n` becomes bigger.**

For example:

```text
n = 10
n = 100
n = 1000
n = 1,000,000
```

The question is:

> "How does the number of operations grow?"

---

# 3. Big-O Notation

Big-O describes the **growth rate** of an algorithm.

The most common ones:

```text
O(1)        → Constant
O(log n)    → Logarithmic
O(n)        → Linear
O(n log n)  → Linearithmic
O(n²)       → Quadratic
O(n³)       → Cubic
O(2ⁿ)       → Exponential
O(n!)       → Factorial
```

---

# 4. Complexity Ranking

Remember this order:

```text
BEST
  ↓
O(1)
  ↓
O(log n)
  ↓
O(n)
  ↓
O(n log n)
  ↓
O(n²)
  ↓
O(n³)
  ↓
O(2ⁿ)
  ↓
O(n!)
  ↓
WORST
```

### Memory Trick

> **Constant → Log → Linear → N Log N → Square → Cube → Exponential → Factorial**

---

# 5. O(1) — Constant Time

The number of operations does not depend on `n`.

```js
const first = arr[0];
```

Whether array contains:

```text
10 elements
100 elements
1,000,000 elements
```

We directly access index `0`.

Therefore:

```text
Time = O(1)
```

### Examples

```js
arr[0]

arr[arr.length - 1]

const x = 10 + 20;

map.get(key);

set.has(value);
```

### Trick

> If the code does the same amount of work regardless of `n` → **O(1)**

---

# 6. O(n) — Linear Time

One complete traversal of `n` elements.

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

Runs approximately:

```text
n times
```

Therefore:

```text
O(n)
```

### Examples

```js
for (const item of arr) {
    console.log(item);
}
```

```js
arr.forEach(item => {
    console.log(item);
});
```

### Trick

> One loop going from `0` to `n` → **O(n)**

---

# 7. O(n²) — Quadratic

Usually happens with **nested loops** where both loops depend on `n`.

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        console.log(i, j);

    }
}
```

Outer loop:

```text
n
```

Inner loop:

```text
n
```

Total:

```text
n × n = n²
```

Therefore:

```text
O(n²)
```

### Trick

> `n` loop inside `n` loop → **O(n²)**

---

# 8. O(n³) — Cubic

Three nested loops:

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        for (let k = 0; k < n; k++) {

            console.log(i, j, k);

        }
    }
}
```

Operations:

```text
n × n × n
= n³
```

Therefore:

```text
O(n³)
```

### Trick

```text
1 loop  → O(n)
2 loops → O(n²)
3 loops → O(n³)
```

---

# 9. O(log n)

This is extremely important in DSA.

The input gets reduced by a factor each time.

Example:

```js
let n = 100;

n = n / 2;
n = n / 2;
n = n / 2;
...
```

The number of operations is approximately:

```text
log₂(n)
```

Therefore:

```text
O(log n)
```

### Common Example

**Binary Search**

```text
100
 ↓
50
 ↓
25
 ↓
12
 ↓
6
 ↓
3
 ↓
1
```

We keep cutting the search space in half.

Therefore:

```text
Binary Search = O(log n)
```

### Golden Trick

> If input becomes **half / third / quarter** every step → usually **O(log n)**

---

# 10. O(n log n)

Very common in efficient sorting algorithms.

Examples:

```text
Merge Sort
Heap Sort
Average-case Quick Sort
```

Typical pattern:

```text
Divide → log n levels
Process → n elements per level
```

Therefore:

```text
n × log n

= O(n log n)
```

---

# 11. Loop Pattern Tricks

## Pattern 1 — Normal Loop

```js
for (let i = 0; i < n; i++) {
}
```

Answer:

```text
O(n)
```

---

## Pattern 2 — Loop by 2

```js
for (let i = 0; i < n; i += 2) {
}
```

It runs approximately:

```text
n / 2
```

But we ignore constants.

```text
O(n / 2)
= O(n)
```

### Important

> `O(n/2)` becomes **O(n)**

---

## Pattern 3 — Loop by 10

```js
for (let i = 0; i < n; i += 10) {
}
```

Runs:

```text
n / 10
```

Still:

```text
O(n)
```

### Rule

> Constants don't matter in Big-O.

---

# 12. Drop Constants

Suppose:

```js
for (let i = 0; i < n; i++) {
}

for (let i = 0; i < n; i++) {
}
```

Total:

```text
O(n) + O(n)
= O(2n)
```

We drop the constant `2`.

Final:

```text
O(n)
```

---

# 13. Drop Smaller Terms

Suppose:

```text
O(n² + n)
```

When `n` becomes very large:

```text
n²
```

dominates `n`.

Therefore:

```text
O(n² + n)
= O(n²)
```

### Another Example

```text
O(n³ + n² + n + 10)
```

Final:

```text
O(n³)
```

### Golden Rule

> Keep the **fastest-growing term**.

---

# 14. Sequential Loops

Consider:

```js
for (let i = 0; i < n; i++) {
}

for (let j = 0; j < n; j++) {
}
```

First loop:

```text
O(n)
```

Second loop:

```text
O(n)
```

Total:

```text
O(n) + O(n)
= O(2n)
= O(n)
```

### Important

> Sequential loops are usually **added**, not multiplied.

---

# 15. Nested Loops

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

    }
}
```

Nested means multiplication:

```text
O(n) × O(n)
= O(n²)
```

### Remember

```text
Side by side → ADD

Nested → MULTIPLY
```

This is one of the most useful interview tricks.

---

# 16. Different Input Sizes

Consider:

```js
for (let i = 0; i < n; i++) {
}

for (let j = 0; j < m; j++) {
}
```

Don't assume `m = n`.

Complexity:

```text
O(n + m)
```

Not:

```text
O(n)
```

---

### Nested Different Inputs

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < m; j++) {

    }
}
```

Complexity:

```text
O(n × m)
```

---

# 17. If-Else Complexity

```js
if (condition) {
    // O(n)
} else {
    // O(n²)
}
```

Worst-case complexity:

```text
O(n²)
```

Why?

Because only one branch executes.

We consider the **worst case**.

### Trick

> If-else → usually take the larger/worst branch.

---

# 18. Array Access

For a JavaScript array:

```js
arr[5]
```

Usually:

```text
O(1)
```

Because we directly access an index.

---

# 19. Array Search

```js
for (let i = 0; i < arr.length; i++) {

    if (arr[i] === target) {
        return i;
    }

}
```

Worst case:

```text
O(n)
```

Because the target may be at the end or absent.

---

# 20. Binary Search

For a sorted array:

```text
Search space
     ↓
     n
     ↓
    n/2
     ↓
    n/4
     ↓
    n/8
     ↓
    ...
```

Therefore:

```text
Time = O(log n)
```

Space depends on implementation:

```text
Iterative Binary Search → O(1)
Recursive Binary Search → O(log n)
```

---

# 21. Two Pointer Pattern

Example:

```js
let left = 0;
let right = arr.length - 1;

while (left < right) {

    if (arr[left] + arr[right] === target) {
        return true;
    }

    left++;
    right--;
}
```

Even though there are two pointers:

```text
left moves → n
right moves → n
```

They don't create nested loops.

Therefore:

```text
O(n)
```

### Important Trick

> Two pointers moving through the array → usually **O(n)**.

---

# 22. Sliding Window

Example:

```js
let left = 0;

for (let right = 0; right < n; right++) {

    // process window

    while (condition) {
        left++;
    }
}
```

Even though there is a `for` loop and a `while` loop, it can still be:

```text
O(n)
```

Why?

Because `right` moves at most `n` times and `left` also moves at most `n` times.

Total:

```text
O(n + n)
= O(n)
```

### Golden Trick

> If both pointers only move forward and never reset → often **O(n)**.

---

# 23. HashMap / HashSet

Typical operations:

```js
map.set(key, value);

map.get(key);

map.has(key);

set.add(value);

set.has(value);
```

Average-case:

```text
O(1)
```

This is why HashMap/HashSet is extremely useful in DSA.

---

# 24. Common Data Structure Complexity

| Operation                 | Average Time |
| ------------------------- | -----------: |
| Array Access              |         O(1) |
| Array Search              |         O(n) |
| Array Insert at End       |         O(1) |
| Array Insert at Beginning |         O(n) |
| HashMap Get               |         O(1) |
| HashMap Set               |         O(1) |
| HashSet Has               |         O(1) |
| Stack Push                |         O(1) |
| Stack Pop                 |         O(1) |
| Queue Enqueue             |        O(1)* |
| Queue Dequeue             |        O(1)* |
| Binary Search             |     O(log n) |

> `*` assumes an appropriate queue implementation, such as a deque or pointer-based approach.

---

# 25. Sorting Complexity Cheat Sheet

| Algorithm      |       Best |    Average |      Worst |
| -------------- | ---------: | ---------: | ---------: |
| Bubble Sort    |       O(n) |      O(n²) |      O(n²) |
| Selection Sort |      O(n²) |      O(n²) |      O(n²) |
| Insertion Sort |       O(n) |      O(n²) |      O(n²) |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) |
| Quick Sort     | O(n log n) | O(n log n) |      O(n²) |
| Heap Sort      | O(n log n) | O(n log n) | O(n log n) |

---

# 26. Bubble Sort Trick

Nested loops:

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - i - 1; j++) {

    }

}
```

Looks like:

```text
n × n
```

Therefore:

```text
O(n²)
```

---

# 27. Selection Sort Trick

Find the minimum for every position.

```text
First position → search n
Second position → search n-1
Third position → search n-2
...
```

Total:

```text
n + (n-1) + (n-2) + ...
```

This becomes:

```text
O(n²)
```

---

# 28. Insertion Sort

Best case:

```text
Already sorted
```

Only small checks are required.

```text
Best = O(n)
```

Worst case:

```text
Reverse sorted
```

Many elements need to move.

```text
Worst = O(n²)
```

---

# 29. Recursion

Example:

```js
function print(n) {

    if (n === 0) return;

    console.log(n);

    print(n - 1);
}
```

Calls:

```text
n
n-1
n-2
n-3
...
1
```

Therefore:

```text
Time = O(n)
Space = O(n)
```

Why space?

Because recursive calls are stored in the **call stack**.

---

# 30. Recursion Call Stack

Example:

```js
function fun(n) {

    if (n === 0) return;

    fun(n - 1);
}
```

For:

```text
fun(3)
```

Call stack:

```text
fun(3)
  ↓
fun(2)
  ↓
fun(1)
  ↓
fun(0)
```

Maximum stack depth:

```text
n
```

Therefore:

```text
Space = O(n)
```

---

# 31. Recursion Trick

Ask:

### Question 1

How many times is the function called?

→ **Time Complexity**

### Question 2

How deep can the recursion go?

→ **Space Complexity**

---

# 32. Fibonacci Recursion

Classic example:

```js
function fib(n) {

    if (n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
}
```

Each call creates two more calls.

This creates a huge recursion tree.

Typical naive complexity:

```text
Time = O(2ⁿ)
Space = O(n)
```

Why space `O(n)`?

Because the deepest active recursion path is about `n`.

---

# 33. Space Complexity

Space complexity means:

> How much **extra memory** does our algorithm need?

Example:

```js
const result = [];

for (let i = 0; i < n; i++) {
    result.push(arr[i] * 2);
}
```

Result contains `n` elements.

Therefore:

```text
Space = O(n)
```

---

# 34. O(1) Space

```js
let sum = 0;

for (let i = 0; i < n; i++) {
    sum += arr[i];
}
```

We only use a few variables:

```text
sum
i
```

No matter how large `n` becomes, extra variables remain constant.

Therefore:

```text
Space = O(1)
```

---

# 35. Output Space vs Auxiliary Space

Important interview concept.

Suppose:

```js
function double(arr) {

    const result = [];

    for (const num of arr) {
        result.push(num * 2);
    }

    return result;
}
```

The result array uses:

```text
O(n)
```

If the interviewer asks for **auxiliary space**, sometimes the returned output is excluded.

So always clarify:

> "Are we counting the output space or only auxiliary space?"

---

# 36. String Concatenation Trick

Be careful with repeated string operations.

Example:

```js
let result = "";

for (let i = 0; i < n; i++) {
    result += arr[i];
}
```

Depending on the language/runtime and implementation, repeated string concatenation can have more than linear cost because strings may be copied.

In interviews, don't blindly assume every string-building operation is `O(1)`.

---

# 37. Matrix Complexity

For an `n × n` matrix:

```js
for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

        console.log(matrix[i][j]);

    }
}
```

Rows:

```text
n
```

Columns:

```text
n
```

Total:

```text
n × n
= O(n²)
```

---

# 38. Matrix With Different Dimensions

For an `m × n` matrix:

```text
Rows = m
Columns = n
```

Complexity:

```text
O(m × n)
```

Don't automatically write `O(n²)`.

---

# 39. Common DSA Patterns

| Pattern                | Typical Complexity |
| ---------------------- | -----------------: |
| Simple Traversal       |               O(n) |
| Two Pointers           |               O(n) |
| Sliding Window         |               O(n) |
| HashMap Lookup         |       O(1) average |
| Binary Search          |           O(log n) |
| Sorting + Traversal    |         O(n log n) |
| Divide & Conquer       |   Often O(n log n) |
| Nested Pair Comparison |              O(n²) |
| Backtracking           |  Often exponential |
| Naive Fibonacci        |              O(2ⁿ) |

These are typical patterns, not universal rules.

---

# 40. The Most Important Complexity Tricks

## Trick 1 — One Loop

```js
for (...) {}
```

Usually:

```text
O(n)
```

---

## Trick 2 — Nested Loop

```js
for (...) {
    for (...) {}
}
```

Usually:

```text
O(n²)
```

---

## Trick 3 — Three Nested Loops

```text
O(n³)
```

---

## Trick 4 — Divide by 2

```js
n = n / 2;
```

Usually:

```text
O(log n)
```

---

## Trick 5 — Multiply by 2

```js
i *= 2;
```

Usually:

```text
O(log n)
```

Example:

```js
for (let i = 1; i < n; i *= 2) {
}
```

Values:

```text
1
2
4
8
16
32
...
```

Number of iterations:

```text
log₂(n)
```

Therefore:

```text
O(log n)
```

---

# 41. The `i *= 2` Trick

Remember:

```js
i++
```

→

```text
O(n)
```

But:

```js
i *= 2
```

→

```text
O(log n)
```

Similarly:

```js
i /= 2
```

→ usually:

```text
O(log n)
```

---

# 42. Nested Logarithmic Loop

Consider:

```js
for (let i = 1; i < n; i *= 2) {

    for (let j = 1; j < n; j *= 2) {

    }

}
```

Outer:

```text
O(log n)
```

Inner:

```text
O(log n)
```

Nested:

```text
O(log n × log n)
```

Final:

```text
O((log n)²)
```

---

# 43. Loop That Shrinks

```js
for (let i = n; i > 0; i /= 2) {
}
```

Values:

```text
n
n/2
n/4
n/8
...
```

Therefore:

```text
O(log n)
```

---

# 44. Important Nested Loop Trap

Consider:

```js
for (let i = 0; i < n; i++) {

    let j = i;

    while (j < n) {
        j++;
    }
}
```

At first glance:

```text
for + while = O(n²)
```

And in this case, the total work is indeed quadratic:

```text
n + (n-1) + (n-2) + ...
= O(n²)
```

But don't blindly use "nested = n²."

Always ask:

> **How many total times does the inner operation execute?**

---

# 45. Best Case, Average Case, Worst Case

Suppose:

```js
for (let i = 0; i < n; i++) {

    if (arr[i] === target) {
        return i;
    }

}
```

### Best Case

Target is at index `0`.

```text
O(1)
```

### Worst Case

Target is at the end or doesn't exist.

```text
O(n)
```

### Average Case

Usually:

```text
O(n)
```

---

# 46. Interview Rule

When someone asks:

> "What is the time complexity?"

Usually give the **worst-case Big-O**, unless they specifically ask for best/average case.

---

# 47. Big-O vs Big-Theta vs Big-Omega

### Big-O

Upper bound / commonly used to describe worst-case growth.

```text
O(n)
```

### Big-Ω

Lower bound.

```text
Ω(n)
```

### Big-Θ

Tight bound.

```text
Θ(n)
```

For beginner/interview discussions, **Big-O** is the most commonly used notation.

---

# 48. Common Mistakes

## Mistake 1

Thinking:

```text
O(2n) ≠ O(n)
```

Actually:

```text
O(2n) = O(n)
```

---

## Mistake 2

Thinking:

```text
O(n² + n) = O(n³)
```

Wrong.

Correct:

```text
O(n²)
```

---

## Mistake 3

Thinking two sequential loops mean:

```text
O(n²)
```

Example:

```js
for (...) {}

for (...) {}
```

Correct:

```text
O(n)
```

---

## Mistake 4

Thinking two pointers mean:

```text
O(n²)
```

Usually:

```text
O(n)
```

if each pointer moves through the input once.

---

## Mistake 5

Ignoring recursion space.

Recursive calls use the call stack.

---

# 49. Quick Complexity Identification Formula

When you see code, ask these questions in order:

### Step 1

**How many times does the main operation execute?**

---

### Step 2

Is there a loop?

```text
One loop → O(n)
```

---

### Step 3

Are loops nested?

```text
Nested → multiply
```

---

### Step 4

Does the input shrink/grow exponentially?

```text
n → n/2 → n/4
```

or

```text
1 → 2 → 4 → 8
```

Then:

```text
O(log n)
```

---

### Step 5

Are there different input sizes?

```text
n and m
```

Keep them separate.

---

### Step 6

Is recursion involved?

Count:

```text
Number of calls
+
Maximum recursion depth
```

---

### Step 7

Is extra memory created?

Look for:

```text
new arrays
new objects
hash maps
sets
recursion stack
```

---

# 50. 10-Second Interview Trick

When looking at code:

```text
        ↓
Any direct operation?
        ↓
       O(1)

        ↓
One loop?
        ↓
       O(n)

        ↓
Nested loop?
        ↓
       O(n²)

        ↓
Divide by 2 / multiply by 2?
        ↓
      O(log n)

        ↓
Sort first?
        ↓
   Usually O(n log n)

        ↓
HashMap / HashSet?
        ↓
    O(1) average lookup

        ↓
Recursion?
        ↓
Count calls + stack depth
```

---

# 51. Ultimate Cheat Sheet

```text
Array Access             → O(1)

Array Search             → O(n)

One Loop                 → O(n)

Two Sequential Loops     → O(n)

Nested Loops             → O(n²)

Three Nested Loops       → O(n³)

Divide by 2              → O(log n)

Multiply by 2            → O(log n)

Binary Search            → O(log n)

Two Pointers             → O(n)

Sliding Window           → O(n)

HashMap Lookup           → O(1) average

HashSet Lookup            → O(1) average

Merge Sort               → O(n log n)

Heap Sort                → O(n log n)

Quick Sort Average       → O(n log n)

Quick Sort Worst         → O(n²)

Bubble Sort              → O(n²)

Selection Sort            → O(n²)

Insertion Sort Best       → O(n)

Insertion Sort Worst      → O(n²)

Simple Recursion          → Often O(n)

Naive Fibonacci           → O(2ⁿ)

Nested Backtracking       → Often exponential
```

---

# 52. Final Golden Rules 🧠

### Rule 1

> **Constants are ignored.**

```text
O(5n) → O(n)
O(100n) → O(n)
```

---

### Rule 2

> **Keep the fastest-growing term.**

```text
O(n² + n + 10)
→ O(n²)
```

---

### Rule 3

> **Sequential = Add**

```text
O(n) + O(n)
= O(n)
```

---

### Rule 4

> **Nested = Multiply**

```text
O(n) × O(n)
= O(n²)
```

---

### Rule 5

> **Halving = Logarithmic**

```text
n → n/2 → n/4 → ...
= O(log n)
```

---

### Rule 6

> **One complete traversal = Linear**

```text
O(n)
```

---

### Rule 7

> **Two pointers don't automatically mean O(n²).**

If both move only forward:

```text
O(n)
```

---

### Rule 8

> **Recursion has stack space.**

```text
n recursive depth
→ O(n) space
```

---

### Rule 9

> **HashMap/HashSet usually gives O(1) average lookup.**

This can convert:

```text
O(n²)
```

into:

```text
O(n)
```

in many problems.

---

### Rule 10

> Don't just count loops. Count **total operations**.

This is the most important rule.

---

# 🚀 Final Revision Formula

Before an interview, remember:

```text
O(1)
↓
Direct access

O(log n)
↓
Divide / Multiply by 2

O(n)
↓
One traversal

O(n log n)
↓
Efficient sorting / divide + process

O(n²)
↓
Nested loops

O(2ⁿ)
↓
Branching recursion / subsets

O(n!)
↓
All permutations
```

## 🧠 The Golden Question

Whenever you see a DSA problem, ask:

> **"As `n` becomes bigger, how fast does the amount of work or memory grow?"**

Once you understand this question, **Time Complexity and Space Complexity become much easier.**

---

## ⭐ One-Line Memory Trick

```text
Direct → O(1)
Half → O(log n)
One Loop → O(n)
Sort → O(n log n)
Nested → O(n²)
Branching → O(2ⁿ)
All Arrangements → O(n!)
```

**Keep practicing code and try to identify complexity before running it.**
