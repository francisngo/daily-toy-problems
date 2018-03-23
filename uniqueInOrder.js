/*

Implement the function uniqueInOrder which takes as an argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

Link to problem: https://www.codewars.com/kata/54e6533c92449cc251001667

*/

function uniqueInOrder(iterable) {
    let array = typeof iterable === 'string' ? iterable.split('') : iterable;
    return array.filter((item, index) => {
        if(item !== array[index - 1]) {
            return item;
        }
    });
}

console.log(JSON.stringify(uniqueInOrder('AAAABBBCCDAABBB')) === JSON.stringify(['A', 'B', 'C', 'D', 'A', 'B']));
console.log(JSON.stringify(uniqueInOrder('ABBCcAD')) === JSON.stringify(['A', 'B', 'C', 'c', 'A', 'D']));
console.log(JSON.stringify(uniqueInOrder([1,2,2,3,3])) === JSON.stringify([1,2,3]));