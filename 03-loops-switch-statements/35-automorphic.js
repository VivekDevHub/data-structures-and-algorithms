// Automorphic Number
// Jis number ka square usi number par end ho.
// 5² = 25  
// 5 = Automorphic
// another 25² = 625

let n = 25;

let square = n * n;

if (square % 100 === n) {
    console.log("Automorphic Number");
} else {
    console.log("Not Automorphic Number");
}

//25 × 25 = 625
// 625 % 100 = 25
// 25 === 25    