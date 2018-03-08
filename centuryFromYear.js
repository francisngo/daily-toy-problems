/*

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.

Link to problem: https://codefights.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

*/

function centuryFromYear(year) {
  return Math.ceil(year/100);
}

console.log(centuryFromYear(1905) === 20); // True
console.log(centuryFromYear(1700) === 17); // True
