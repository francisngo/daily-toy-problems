/*

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.

Link to problem: https://codefights.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

*/

function isLucky(n) {
  n = n.toString();
  let half = Math.ceil(n.length / 2);
  let firstHalf = n.slice(0, half).split('');
  let secondHalf = n.slice(half, n.length).split('');

  let firstSum = firstHalf.reduce( (a,b) => parseInt(a) + parseInt(b), 0);
  let secondSum = secondHalf.reduce( (a,b) => parseInt(a) + parseInt(b), 0);

  return firstSum === secondSum
}

console.log(isLucky(1230) === true);
console.log(isLucky(239017) === false);
