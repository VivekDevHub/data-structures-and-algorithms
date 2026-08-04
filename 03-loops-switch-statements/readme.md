# JavaScript Programs — Only `for` Loop

# concepts
```
125 % 10 = 5       ← last digit nikala
125 / 10 = 12.5
floor = 12         ← last digit hata diya

12 % 10 = 2        ← last digit nikala
12 / 10 = 1.2
floor = 1          ← last digit hata diya

1 % 10 = 1         ← last digit nikala
1 / 10 = 0.1
floor = 0          ← last digit hata diya
```

## 1. Print "Hello World" n Times

```javascript
let n = 5;

for (let i = 1; i <= n; i++) {
    console.log("Hello World");
}
```

---

## 2. Print Natural Numbers Up to n

```javascript
let n = 10;

for (let i = 1; i <= n; i++) {
    console.log(i);
}
```

---

## 3. Print n to 1 — Reverse Loop

```javascript
let n = 10;

for (let i = n; i >= 1; i--) {
    console.log(i);
}
```

---

## 4. Multiplication Table

```javascript
let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}
```

---

## 5. Sum Up to n Terms

```javascript
let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);
```

---

## 6. Sum of Even & Odd Numbers Separately

```javascript
let n = 10;

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= n; i++) {

    if (i % 2 === 0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;
    }
}

console.log("Even Sum =", evenSum);
console.log("Odd Sum =", oddSum);
```

---

## 7. Print All Factors

```javascript
let n = 12;

for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        console.log(i);
    }
}
```

---

## 8. Sum of All Factors

```javascript
let n = 12;
let sum = 0;

for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        sum = sum + i;
    }
}

console.log("Sum of Factors =", sum);
```

---

## 9. Prime Number Check

```javascript
let n = 7;
let count = 0;

for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        count++;
    }
}

if (count === 2) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}
```

---

## 10. Power of a Number — a^b

Example:

```text
2^5 = 32
```

```javascript
let a = 2;
let b = 5;

let result = 1;

for (let i = 1; i <= b; i++) {
    result = result * a;
}

console.log("Answer =", result);
```

---

# 🔥 Number Digit Programs Using ONLY for Loop

## 11. Print Each Digit of a Number

For:

```text
1234
```

Output:

```text
4
3
2
1
```

```javascript
let n = 1234;

for (; n > 0; n = Math.floor(n / 10)) {

    let digit = n % 10;

    console.log(digit);
}
```

### Understand this carefully

Normally `for` looks like:

```javascript
for (initialization; condition; update) {
    
}
```

But yahan initialization pehle hi kar diya:

```javascript
let n = 1234;
```

Isliye:

```javascript
for (; n > 0; n = Math.floor(n / 10)) {
```

---

## 12. Sum of Digits

Example:

```text
1234

1 + 2 + 3 + 4 = 10
```

```javascript
let n = 1234;
let sum = 0;

for (; n > 0; n = Math.floor(n / 10)) {

    let digit = n % 10;

    sum = sum + digit;
}

console.log("Sum of Digits =", sum);
```

---

## 13. Reverse a Number

Example:

```text
1234 → 4321
```

```javascript
let n = 1234;
let reverse = 0;

for (; n > 0; n = Math.floor(n / 10)) {

    let digit = n % 10;

    reverse = reverse * 10 + digit;
}

console.log("Reverse =", reverse);
```

### ⭐ Remember

```javascript
reverse = reverse * 10 + digit;
```

---

## 14. Palindrome Number

Example:

```text
121 → 121

Palindrome
```

```javascript
let n = 121;

let original = n;
let reverse = 0;

for (; n > 0; n = Math.floor(n / 10)) {

    let digit = n % 10;

    reverse = reverse * 10 + digit;
}

if (original === reverse) {
    console.log("Palindrome Number");
} else {
    console.log("Not Palindrome Number");
}
```

---

## 15. Strong Number

Example:

```text
145

1! + 4! + 5!

1 + 24 + 120

= 145

Strong Number
```

```javascript
let n = 145;

let original = n;
let sum = 0;

for (; n > 0; n = Math.floor(n / 10)) {

    let digit = n % 10;

    let factorial = 1;

    for (let i = 1; i <= digit; i++) {
        factorial = factorial * i;
    }

    sum = sum + factorial;
}

if (sum === original) {
    console.log("Strong Number");
} else {
    console.log("Not Strong Number");
}
```

---

## 16. Automorphic Number

Example:

```text
25² = 625

625 ends with 25

Therefore Automorphic
```

### General Version

```javascript
let n = 25;

let square = n * n;

let temp = n;
let divisor = 1;

for (; temp > 0; temp = Math.floor(temp / 10)) {
    divisor = divisor * 10;
}

if (square % divisor === n) {
    console.log("Automorphic Number");
} else {
    console.log("Not Automorphic Number");
}
```

---

# 17. Print "Hello" Until Wrong Input

Aapne specifically `do...while` bola tha, lekin ab **for loop only** chahiye.

Isliye infinite `for` loop use karenge:

```javascript
for (;;) {

    let input = prompt("Enter yes to continue:");

    if (input === "yes") {

        console.log("Hello");

    } else {

        break;
    }
}
```

### Logic

```text
for (;;)
   ↓
Input lo
   ↓
yes?
   ↓
YES → Hello → repeat
NO → break → stop
```

### `for (;;)` ka matlab

```javascript
for (;;) {
}
```

means:

> Loop ko continuously chalao jab tak `break` na aaye.

---

# 18. Menu-Driven Calculator — Only for Loop

```javascript
for (;;) {

    let choice = Number(
        prompt(
            "1. Addition\n" +
            "2. Subtraction\n" +
            "3. Multiplication\n" +
            "4. Division\n" +
            "5. Exit\n\n" +
            "Enter your choice:"
        )
    );

    if (choice === 5) {
        console.log("Calculator Closed");
        break;
    }

    if (choice < 1 || choice > 5) {
        console.log("Invalid Choice");
        continue;
    }

    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    switch (choice) {

        case 1:
            console.log("Result =", a + b);
            break;

        case 2:
            console.log("Result =", a - b);
            break;

        case 3:
            console.log("Result =", a * b);
            break;

        case 4:

            if (b === 0) {
                console.log("Cannot divide by zero");
            } else {
                console.log("Result =", a / b);
            }

            break;
    }
}
```

### Important

Yahan:

```javascript
for (;;) {
```

calculator ko continuously chalata hai.

Aur:

```javascript
break;
```

calculator ko close karta hai.

---

# 19. Print Weekday Using switch

```javascript
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}
```

---

# 20. Vowel / Consonant Using switch

```javascript
let ch = "a";

switch (ch.toLowerCase()) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}
```

---

# 21. Guess Game — Only for Loop

```javascript
let secretNumber = Math.floor(Math.random() * 10) + 1;

for (;;) {

    let guess = Number(
        prompt("Guess a number between 1 and 10:")
    );

    if (guess < secretNumber) {

        console.log("Too Low!");

    } else if (guess > secretNumber) {

        console.log("Too High!");

    } else {

        console.log("🎉 Correct Guess!");
        break;
    }
}
```

### Main logic

```text
for (;;)
   ↓
Guess
   ↓
Too Low → repeat
Too High → repeat
Correct → break
```

---

# 22. Right Triangle Star Pattern

Output:

```text
*
**
***
****
*****
```

### Code

```javascript
let n = 5;

for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {

        row = row + "*";
    }

    console.log(row);
}
```

---

# 🧠 FOR LOOP MASTER FORMULA

## Normal counting

```javascript
for (let i = 1; i <= n; i++) {
    
}
```

Meaning:

```text
1 → 2 → 3 → 4 → ... → n
```

---

## Reverse counting

```javascript
for (let i = n; i >= 1; i--) {

}
```

Meaning:

```text
n → n-1 → n-2 → ... → 1
```

---

## Number ke digits ke liye

```javascript
for (; n > 0; n = Math.floor(n / 10)) {

    let digit = n % 10;

}
```

### Is pattern ko yaad kar lo:

```text
n % 10
   ↓
Last digit nikalo

Math.floor(n / 10)
   ↓
Last digit hatao
```

Example:

```text
1234

1234 % 10 = 4
1234 / 10 = 123

123 % 10 = 3
123 / 10 = 12

12 % 10 = 2
12 / 10 = 1

1 % 10 = 1
1 / 10 = 0
```

---

# ⭐ FOR LOOP Cheat Sheet

| Problem        | `for` pattern                    |
| -------------- | -------------------------------- |
| 1 to n         | `for(let i=1; i<=n; i++)`        |
| n to 1         | `for(let i=n; i>=1; i--)`        |
| Sum            | `sum += value`                   |
| Even           | `i % 2 === 0`                    |
| Odd            | `i % 2 !== 0`                    |
| Factor         | `n % i === 0`                    |
| Digits         | `n % 10`                         |
| Remove digit   | `Math.floor(n / 10)`             |
| Reverse        | `reverse = reverse * 10 + digit` |
| Repeat forever | `for(;;)`                        |
| Stop loop      | `break`                          |
| Skip iteration | `continue`                       |
| Star pattern   | Nested `for` loops               |
| Menu           | `for(;;) + switch`               |
| Guess Game     | `for(;;) + break`                |
