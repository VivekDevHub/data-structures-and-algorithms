//Array ke elements ko ek-ek karke check karna until target mil jaye.

let arr = [10, 25, 30, 45, 60];

let target = 45;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === target) {
        console.log("Element found at index:", i);
        break;
    }
}