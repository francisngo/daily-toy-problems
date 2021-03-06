/*

Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.

Link to problem: https://codefights.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

*/

function checkPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join('');
}

console.log(checkPalindrome('aabaa') === true);
console.log(checkPalindrome('abac') === false);
console.log(checkPalindrome('a') === true);
