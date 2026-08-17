let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  sum += matrix[i][i];
}

console.log(sum); // 15

// matrix[i][i] kaise kaam kar raha hai?
// i same row aur column ko point karega:
// i = 0 → matrix[0][0] → 1
// i = 1 → matrix[1][1] → 5
// i = 2 → matrix[2][2] → 9