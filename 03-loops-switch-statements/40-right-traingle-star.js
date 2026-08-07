// Pattern 1: 1. Square Pattern
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    row += "* ";
  }

  console.log(row);
}

// Pattern 2: Right Triangle Star Pattern

// *
// * *
// * * *
// * * * *
// * * * * *

let r = 5;

for (let i = 1; i <= r; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    // inner loop j decide krega kitne stars print hone hai row mw
    row += "*";
  }

  console.log(row);
}

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

// Pattern 5: Inverted Left Triangle
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

let e = 5;

for (let i = 1; i <= e; i++) {
  let row = "";

  for (let j = 1; j < i; j++) {
    row += "  ";
  }

  for (let j = 1; j <= n - i + 1; j++) {
    row += "* ";
  }

  console.log(row);
}

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

// Pattern 7: Inverted Pyramid
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

let w = 5;

for (let i = 1; i <= w; i++) {
  let row = "";

  for (let j = 1; j < i; j++) {
    row += " ";
  }

  for (let j = 1; j <= w - i + 1; j++) {
    row += "* ";
  }

  console.log(row);
}

// Pattern 8: Hollow Square
// *****
// *   *
// *   *
// *   *
// *****

let h = 5;

for (let i = 1; i <= h; i++) {
  let row = "";

  for (let j = 1; j <= h; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}


// 🔥 Master Formula for All Star Patterns
// | Pattern           | Spaces                             | Stars                             |
// | ----------------- | ---------------------------------- | --------------------------------- |
// | Square            | 0                                  | `n`                               |
// | Right Triangle    | 0                                  | `i`                               |
// | Inverted Triangle | 0                                  | `n-i+1`                           |
// | Left Triangle     | `n-i`                              | `i`                               |
// | Inverted Left     | `i-1`                              | `n-i+1`                           |
// | Pyramid           | `n-i`                              | `i` (or `2*i-1` for full pyramid) |
// | Inverted Pyramid  | `i-1`                              | `n-i+1` (or `2*(n-i)+1`)          |
// | Diamond           | Combine Pyramid + Inverted Pyramid |                                   |
// | Hollow Square     | `if` condition                     | Border only                       |


// j <= n        → Square

// j <= i        → Right Triangle

// j <= n-i+1    → Inverted Triangle

// Spaces = n-i  → Right Align

// Stars = 2*i-1 → Full Pyramid

// Top + Bottom  → Diamond

// if (border)   → Hollow Pattern