/*

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Link to problem: https://codefights.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

*/

function commonCharacterCount(s1, s2) {
  var hash1 = {};
  var hash2 = {};
  var result = [];
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1) {
      if (!hash1[s1[i]]) {
        hash1[s1[i]] = 1;
      } else {
        hash1[s1[i]] += 1;
      }
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (s1.indexOf(s2[i]) !== -1) {
      if (!hash2[s2[i]]) {
        hash2[s2[i]] = 1;
      } else {
        hash2[s2[i]] += 1;
      }
    }
  }
  for (let k in hash1) {
    if (hash1[k] < hash2[k]) {
      result.push(hash1[k]);
    } else {
      result.push(hash2[k])
    }
  }
  return result.reduce(function(a,b) { return a + b ;}, 0);
}

console.log(commonCharacterCount('aabcc', 'adcaa') === 3);
