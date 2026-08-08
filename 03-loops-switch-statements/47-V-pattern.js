// i = 0 → *     *
// i = 1 →  *   *
// i = 2 →   * *
// i = 3 →    *

let n = 4;

for (let i = 0; i < n; i++) {
  let pattern = "";

  // Left side
  for (let j = 0; j < i; j++) {
    pattern += " ";
  }

  pattern += "*";

  // Middle spaces
  for (let j = 0; j < 2 * (n - i - 1) - 1; j++) {
    pattern += " ";
  }

  // Right side star
  if (i !== n - 1) {
    pattern += "*";
  }

  console.log(pattern);
}
