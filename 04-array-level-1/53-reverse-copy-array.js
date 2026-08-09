let arr = [10, 20, 30, 40, 50];

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log("Original array =", arr);
console.log("Reversed array =", reversed);

// Time: O(n)
// Space: O(n)