// Pattern 4: Left Triangle
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let p = 5;

for (let i = 1; i <= p; i++) {
  let row = "";

  // Spaces
  for (let j = 1; j <= p - i; j++) {
    row += "  ";
  }

  // Stars
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
