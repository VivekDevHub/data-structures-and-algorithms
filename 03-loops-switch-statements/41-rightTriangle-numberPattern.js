// 1. Right Triangle Number Pattern (Same Number in Each Row)
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {  // Ye decide karta hai ki row me kitni baar print hoga.
    row += i + " ";   //Same row number print hoga
  }

  console.log(row);
}


// 2. Right Triangle Increasing Numbers
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let m = 5;

for (let i = 1; i <= m; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";  // j ko print kr rhe hai kyuki j me increasing number print hote hai
    }

    console.log(row);

}

// 3. Floyd's Triangle ( Continuous Number Pattern )
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let p = 5;
let num = 1;

for (let i = 1; i <= p; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num + " "; // continuous number print
        num++;
    }

    console.log(row);

}

// 4. Reverse Number in Right Triangle

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

let r = 5;

for (let i = 1; i <= r; i++) {

    let row = "";

    for (let j = i; j >= 1; j--) {
        row += j + " ";
    }

    console.log(row);

}



// Outer Loop (i)
// │
// ├── Number of Rows
// │
// └── Inner Loop (j)
//      │
//      ├── j <= i      → Right Triangle
//      ├── j <= n-i+1  → Inverted Triangle
//      ├── j <= n      → Square
//      └── Spaces + Numbers → Pyramid

// i → Same row number (1, 2 2, 3 3 3)
// j → Increasing numbers (1 2 3)
// num++ → Continuous numbers (Floyd's Triangle)
// i - j + 1 or reverse loop → Reverse numbers (3 2 1)

// Print i        → 1 / 2 2 / 3 3 3
// Print j        → 1 / 1 2 / 1 2 3
// Print num++    → 1 / 2 3 / 4 5 6
// Reverse j--    → 1 / 2 1 / 3 2 1

// Outer Loop (i)  → Rows
// Inner Loop (j)  → Columns
// Print Statement → Kya print karna hai

