let arr = [10, 45, 23, 89, 12];

let greatest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatest) {
        greatest = arr[i];
    }
}

console.log("Greatest element =", greatest);

// Time: O(n)
// Space: O(1)