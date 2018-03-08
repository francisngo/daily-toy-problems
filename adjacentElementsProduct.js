/*

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Link to problem: https://codefights.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

*/

function adjacentElementsProduct(inputArray) {
  let largest = -1000;
  for (let i = 0; i < inputArray.length; i++) {
    let product = inputArray[i] * inputArray[i + 1];
    if (product >= largest) {
      largest = product;
    }
  }
  return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]) === 21); // True
