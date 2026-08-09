let arr = [10, -5, 7, -3, -8, 12, -1];

let left = 0;
let right = arr.length - 1;

while (left <= right) {

    if (arr[left] < 0) {
        left++;
    }
    else if (arr[right] >= 0) {
        right--;
    }
    else {
        let temp = arr[left];

        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}

console.log(arr);   
return
// Time: O(n)
// Space: O(1)