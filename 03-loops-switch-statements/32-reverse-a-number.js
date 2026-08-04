let n = 1234;
let reverse = 0;

for (; n > 0; n = Math.floor(n / 10)) {
  let digit = n % 10;
  reverse = reverse * 10 + digit;
}

console.log("Reverse =", reverse);

// reverse = reverse * 10 + n % 10 ;
