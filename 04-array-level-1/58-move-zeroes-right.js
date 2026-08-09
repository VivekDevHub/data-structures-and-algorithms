let arr = [0, 1, 0, 3, 12];

let position = 0;

// Put non-zero elements first
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[position] = arr[i];
    position++;
  }
}

// Fill remaining positions with zero
while (position < arr.length) {
  arr[position] = 0;
  position++;
}

console.log(arr);

// Time: O(n)
// Space: O(1)