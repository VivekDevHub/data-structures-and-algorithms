//Selection Sort - Har round mein sabse chhota element find karo aur usko starting mein rakh do.
// Selection Sort repeatedly finds the minimum element from the unsorted part and swaps it with the first element of that unsorted part

let arr = [5, 3, 8, 4, 2];

for (let i = 0; i < arr.length - 1; i++) {

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // swap
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);
return;

// Time Complexity: O(n²)
// Space Complexity: O(1)

// Find smallest
//       ↓
// Uska index save karo
//       ↓
// Current position se swap karo
//       ↓
// Next position