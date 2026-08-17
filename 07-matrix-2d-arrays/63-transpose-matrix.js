// Transponse matrix means Rows ko Columns aur Columns ko Rows mein convert karna.

let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

let rows = matrix.length;
let cols = matrix[0].length;

let transpose = [];

for (let i = 0; i < cols; i++) {
  transpose[i] = [];

  for (let j = 0; j < rows; j++) {
    transpose[i][j] = matrix[j][i];
  }
}

console.log(transpose);
//  [
//   [1, 4],
//   [2, 5],
//   [3, 6]
//  ]

