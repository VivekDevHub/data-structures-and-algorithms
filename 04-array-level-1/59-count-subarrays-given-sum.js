let arr = [1, 2, 3, 2, 1];
let target = 5;

let count = 0;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = i; j < arr.length; j++) {
    sum = sum + arr[j];

    if (sum === target) {
      count++;
    }
  }
}

console.log("Number of subarrays =", count);
