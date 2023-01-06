/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10872
 */

{
  const length = require('fs').readFileSync('/dev/stdin').toString().trim();
  console.log(new Array(+length).fill(0).reduce((prev, _, idx) => prev * (idx + 1), 1));
}