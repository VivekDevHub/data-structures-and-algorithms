function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPalindrome("madam")); // true

// left starts from the beginning
// right starts from the end
// Compare str[left] and str[right]
// If different → false
// Move left++ and right--
// Continue until left >= right
// If all characters match → true

// Time Complexity: O(n)
// Space Complexity: O(1)