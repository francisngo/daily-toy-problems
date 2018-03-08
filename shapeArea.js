/*

Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

Link to image: https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1491302317375

Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.

Link to problem: https://codefights.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

*/

function shapeArea(n) {
  // n = 1 => 1
  // n = 2 => 5
  // n = 3 => 13
  // n = 4 => 25
  // n = 5 => 41
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}

console.log(shapeArea(2) === 5); // True
console.log(shapeArea(3) === 13); // True
