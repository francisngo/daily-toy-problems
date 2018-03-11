/*

Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Link to problem: https://codefights.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

*/

function allLongestStrings(inputArray) {
  let longestLength = inputArray.reduce((a,b) => a.length > b.length ? a : b);
  return inputArray.filter(word => word.length === longestLength.length);
}

var inputArray = ["aba", "aa", "ad", "vcd", "aba"]
console.log(JSON.stringify(allLongestStrings(inputArray)) === JSON.stringify(["aba", "vcd", "aba"]));
