// Strong Number
// 145 = 1! + 4! + 5! =  1 + 24 + 120 = 145

let n = 145;

let original = n;
let sum = 0;

while (n > 0) {

    let digit = n % 10;

    let factorial = 1;

    for (let i = 1; i <= digit; i++) {
        factorial = factorial * i;
    }

    sum = sum + factorial;

    n = Math.floor(n / 10);
}

if (sum === original) {
    console.log("Strong Number");
} else {
    console.log("Not Strong Number");
}
