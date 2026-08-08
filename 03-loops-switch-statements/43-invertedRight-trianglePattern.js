// Pattern 3: Inverted Right Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

let q = 5;

for (let i = 1; i <= q; i++) {
  let row = "";

  for (let j = 1; j <= q - i + 1; j++) {
    row += "* ";
  }

  console.log(row);
}