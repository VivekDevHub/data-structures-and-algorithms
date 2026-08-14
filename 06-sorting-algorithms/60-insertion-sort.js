// Insertion Sort = Pick → Compare → Shift → Insert
// Insertion Sort builds the sorted array one element at a time by taking the current element and inserting it into its correct position in the sorted portion.

let arr = [5, 3, 8, 4, 2];

for (let i = 1; i < arr.length; i++) {

    let key = arr[i];
    let j = i - 1;

    //Jab tak left side mein element hai aur left element key se bada hai, usko right shift karo.
    while (j >= 0 && arr[j] > key) {

        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;
}

console.log(arr);
return;

// Insertion Sort mein hum first element ko already sorted maan lete hain.

// Pick element
//      ↓
// Compare left
//      ↓
// Bade elements ko shift karo
//      ↓
// Key ko correct position par INSERT karo