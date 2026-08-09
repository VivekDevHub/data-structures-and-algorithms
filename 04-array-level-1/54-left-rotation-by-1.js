let arr = [10, 20, 30, 40, 50];

let temp = arr[0];

for (let i = 1; i < arr.length; i++) {
    arr[i-1] = arr[i];
}

arr[arr.length - 1] = temp;

console.log(arr);

// For left rotation:
// First element → Last
// Everything else → One position left