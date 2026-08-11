let arr = [10, 20, 30, 40, 50, 60, 70];

let target = 60;

let left = 0;                // first index
let right = arr.length - 1;  //last index

while (left <= right) {

    let mid = Math.floor((left + right) / 2);    //. Find Middle

    if (arr[mid] === target) {
        console.log("Element found at index:", mid);
        break;
    }

    if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
return
// Binary Search is a searching technique used to find an element in a sorted array.
// Instead of checking every element one by one, Binary Search:
// 1. Looks at the middle element
// 2. Compares it with the target
// 3. Eliminates half of the array
// 4. Repeats until the element is found

// Array:  [10, 20, 30, 40, 50, 60, 70]
// Target: 60

// First, check the middle:

// 10  20  30  [40]  50  60  70
//              ↑
//            Middle

//            60 > 40

// So we don't need the left half:

// 10 20 30 ❌
// 40 ❌
// 50 60 70 ✅ 


// Now check the middle of the remaining part:

// 50  [60]  70
//      ↑

// Found 60! 🎉


    //     Find Middle
    //          ↓
    //   Is middle target?
    //     ↙          ↘
    //   YES           NO
    //    ↓             ↓
    //  Found      Compare target
    //               with middle
    //              ↙         ↘
    //       target < mid   target > mid
    //             ↓             ↓
    //       go LEFT         go RIGHT