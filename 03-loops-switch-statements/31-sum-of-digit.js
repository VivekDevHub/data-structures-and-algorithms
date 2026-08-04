// Sum of Digits

let n = 1234;
let sum = 0;
for (; n > 0; n = Math.floor(n / 10)) {
  let digit = n % 10;
  sum = sum + digit;
}
console.log("Sum of Digits =", sum);
