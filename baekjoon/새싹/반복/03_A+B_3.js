/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10950
 */

{
  const [n, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
  let result = '';
  for (let i = 0; i < n; i = i + 1) {
    result = result + (+numbers.shift() + +numbers.shift()) + '\n';
  }
  console.log(result);
}