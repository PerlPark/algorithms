/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10952
 */

{
  const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
  let result = '';
  while (numbers.length > 0) {
    const a = +numbers.shift();
    const b = +numbers.shift();
    if (a > 0 && b > 0) {
      result = result + (a + b) + '\n';
    }
  }
  console.log(result);
}