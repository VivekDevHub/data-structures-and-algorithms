// Power of a Number a^b
// 2^5 = 2 × 2 × 2 × 2 × 2 = 32

let a = 2;
let b = 5;

let result = 1;

for (let i = 1; i <= b; i++) {
    result = result * a;
}

console.log(result);