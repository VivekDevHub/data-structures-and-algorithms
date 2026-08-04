// Print All Factors of a Number
// 12 / 1 → remainder 0
// 12 / 2 → remainder 0
// 12 / 3 → remainder 0
// 12 / 4 → remainder 0
// 12 / 6 → remainder 0
// 12 / 12 → remainder 0

// Therefore factors: 1 2 3 4 6 12

let n = 12;

for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        console.log(i);
    }
}