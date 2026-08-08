// *   *
//  * *
//   *
//  * *
// *   *

let n = 5;

for (let i = 0; i < n; i++) {
  let pattern = "";

  for (let j = 0; j < n; j++) {
    if (j === i || j === n - i - 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}

// j === n - i - 1.  left to right
// if (j === i || j === n - i - 1). right to left 