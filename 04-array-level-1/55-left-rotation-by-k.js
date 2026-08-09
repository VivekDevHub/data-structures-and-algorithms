let arr = [10, 20, 30, 40, 50];

let k = 7;

k = k % arr.length;  //Rotating 5 times brings us back to the same array. bcoz array lenght is 5 

for (let j = 1; j <= k; j++) {

    let temp = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }

    arr[arr.length - 1] = temp;
}

console.log(arr);

// Time: O(n × k)
// Space: O(1)