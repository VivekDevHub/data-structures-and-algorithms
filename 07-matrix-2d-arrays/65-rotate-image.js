// Matrix ko 90° clockwise rotate karna hai.

// 90° Clockwise Rotation = 1️⃣ Transpose Matrix 2️⃣ Reverse Every Row
 
// original
// 1 2 3
// 4 5 6
// 7 8 9

// Transpose
// 1 4 7
// 2 5 8
// 3 6 9

// Step 2 — Reverse Every Row
// 1 4 7  →  7 4 1
// 2 5 8  →  8 5 2
// 3 6 9  →  9 6 3

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let n = matrix.length;

// Step 1: Transpose
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {

    // Swap
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}

// Step 2: Reverse every row
for (let i = 0; i < n; i++) {
  matrix[i].reverse();
}

console.log(matrix);