// Pattern 6: Pyramid
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

let pyr = 5;

for (let i = 1; i <= pyr; i++) {
  let row = "";

  for (let j = 1; j <= pyr - i; j++) {
    row += " ";
  }

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}