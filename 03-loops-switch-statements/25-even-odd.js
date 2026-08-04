// Sum of Even & Odd Numbers Separately

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