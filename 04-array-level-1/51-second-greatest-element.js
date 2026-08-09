let arr = [10, 45, 23, 89, 12];

let greatest = Math.max(arr[0],arr[1]);
let secondGreatest = Math.min(arr[0], arr[1]);

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > greatest) {
        secondGreatest = greatest;
        greatest = arr[i];
    }
    else if (arr[i] > secondGreatest && arr[i] !== greatest) {
        secondGreatest = arr[i];
    }
}

console.log("Greatest =", greatest);
console.log("Second Greatest =", secondGreatest);

// Time: O(n)
// Space: O(1)