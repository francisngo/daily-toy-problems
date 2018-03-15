/*

You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

Link to problem: https://codefights.com/arcade/intro/level-3/3o6QFqgYSontKsyk4

*/

function reverseParentheses(s) {
  for (let i = 0; i < s.length; i++) {
    if(s[i] === ')') {
      s = s.substring(0, i) + s.substring(i + 1);
      i--;
      let reversed = '';
      while(s[i] !== '(') {
        reversed += s[i];
        s = s.substring(0, i) + s.substring(i + 1);
        i--;
      }
      s = s.substring(0, i) + reversed + s.substring(i + 1);
      i += reversed.length - 1;
    }
  }
  return s;
}

console.log(reverseParentheses('a(bc)de') === 'acbde');
console.log(reverseParentheses('a(bcdefghijkl(mno)p)q') === 'apmnolkjihgfedcbq');
console.log(reverseParentheses('Code(Cha(lle)nge)') === 'CodeegnlleahC');
