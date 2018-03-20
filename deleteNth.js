/*

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example:
deleteNth ([1,1,1,1],2) // return [1,1]

deleteNth ([20,37,20,21],1) // return [20,37,21]

Link to problem: https://www.codewars.com/kata/554ca54ffa7d91b236000023

*/

function deleteNth(arr, x) {
  let intCount = {};
  return arr.filter((num) => {
    let count = intCount[num] || 0;
    intCount[num] = count + 1;
    return intCount[num] <= x;
  });
}

console.log(JSON.stringify(deleteNth([1,1,1,1],2)) === JSON.stringify([1,1]));
console.log(JSON.stringify(deleteNth([20,37,20,21],1)) === JSON.stringify([20,37,21]));
