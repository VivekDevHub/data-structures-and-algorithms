// Input:
// 1  1  1
// 1  0  1
// 1  1  1

// Output:
// 1  0  1
// 0  0  0
// 1  0  1

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];

const rows = matrix.length;
const cols = matrix[0].length;

let zeroRows = [];
let zeroCols = [];

// Step 1: Find all zero positions
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {

    if (matrix[i][j] === 0) {
      zeroRows.push(i);
      zeroCols.push(j);
    }

  }
}

// Step 2: Make complete rows zero
for (let i of zeroRows) {
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = 0;
  }
}

// Step 3: Make complete columns zero
for (let j of zeroCols) {
  for (let i = 0; i < rows; i++) {
    matrix[i][j] = 0;
  }
}

console.log(matrix);