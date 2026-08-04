// Print Each Digit of a Number

let n = 1234;
for (; n > 0; n = Math.floor(n / 10)) {
  let digit = n % 10;
  console.log(digit);
}
