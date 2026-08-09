let arr = [10, 20, 30, 40, 50];

let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}

if (isSorted) {
    console.log("Array is sorted");
} else {
    console.log("Array is not sorted");
}

// We compare current element with next element.
// 10 < 20 ✅
// 20 < 30 ✅
// 30 < 40 ✅
// 40 < 50 ✅

// 20 > 15 ❌

// Therefore array is not sorted.
// always remember : arr[i] > arr[i + 1]