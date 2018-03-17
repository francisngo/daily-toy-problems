/*

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

Link to problem: https://codefights.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

*/

function addBorder(picture) {
  let result = [''];
  for (let i = 0; i < picture[0].length + 2; i++) {
    result[0] += '*';
  }

  for (let i = 0; i < picture.length; i++) {
    result.push('*');
    for (let j = 0; j < picture[0].length; j++) {
      result[i + 1] += picture[i][j];
    }
    result[i + 1] += '*';
  }
  result.push(result[0]);
  return result;
}

console.log(JSON.stringify(addBorder(["abc","ded"])) === JSON.stringify(["*****","*abc*","*ded*","*****"]));
