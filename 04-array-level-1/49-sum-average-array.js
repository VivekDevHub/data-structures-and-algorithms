let arr = [10, 20, 30, 40, 50];

let sum = 0;

// Calculate sum
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

// Calculate average
let average = sum / arr.length;

console.log("Sum =", sum);
console.log("Average =", average);

// Time: O(n)
// Space: O(1)