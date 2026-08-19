const matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const target = 50;

let found = false;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === target) {
      console.log(`Element found at row ${i}, column ${j}`);
      found = true;
    }
  }
}

if (!found) {
  console.log("Element not found");
}
return;

// i → row ko traverse karega
// j → column ko traverse karega
// matrix[i][j] → current element
// matrix[i][j] === target → check karega ki element mila ya nahi
