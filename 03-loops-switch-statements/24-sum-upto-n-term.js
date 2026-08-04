// sum upto n terms
// n = 5
// 1 + 2 + 3 + 4 + 5 = 15

let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);