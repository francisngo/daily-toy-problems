/*

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Link to problem: https://codefights.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

*/

function sortByHeight(a) {
  let filtered = a.filter(num => num !== -1);
  let sorted = filtered.sort((a,b) => a - b);

  let index = 0;
  for (let i = 0; i< a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sorted[index];
      index++;
    }
  }
  return a;
}

var actual = [-1, 150, 190, 170, -1, -1, 160, 180];
var expected = [-1, 150, 160, 170, -1, -1, 180, 190];
console.log(JSON.stringify(sortByHeight(actual)) === JSON.stringify(expected));
