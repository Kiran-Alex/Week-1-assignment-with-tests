/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let x = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
  let x1 = x.split("").reverse().join("");

  if (x == x1) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
