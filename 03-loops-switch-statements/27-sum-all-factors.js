// Sum of All Factors

let n = 12;
let sum = 0;

for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        sum = sum + i;
    }
}

console.log("Sum of factors =", sum);