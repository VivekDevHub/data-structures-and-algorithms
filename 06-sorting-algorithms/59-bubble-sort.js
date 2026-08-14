//Bubble Sort = Compare adjacent element → Swap → Repeat


let arr = [5, 3, 8, 4, 2];

for (let i = 0; i < arr.length; i++) {

  for (let j = 0; j < arr.length - 1 - i; j++) {

    if (arr[j] > arr[j + 1]) {
      //Agar current element next element se bada hai, to swap karo.

      // swap
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
return;
// Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. After every pass, the largest unsorted element reaches its correct position at the end."
// Time Complexity: O(n²)
// Space Complexity: O(1)

//Outer loop → kitni baar sorting repeat karni hai
// i = PASS. Mujhe kitne passes karne hain?

//Inner loop → elements ko compare karna hai
// j = COMPARISON - Kis elements ko compare karna hai?



//- 1 - i kyun?
//  PASS 1 → 🔄 🔄 🔄 🔄 → biggest element fixed
// PASS 2 → 🔄 🔄 🔄     → next biggest fixed
// PASS 3 → 🔄 🔄        → next fixed
// PASS 4 → 🔄           → done
