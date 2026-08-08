// A
// A B
// A B C
// A B C D
// A B C D E

let n = 5;

for (let i = 1; i <= n; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += String.fromCharCode(64 + j) + " ";
    }

    console.log(pattern);
}