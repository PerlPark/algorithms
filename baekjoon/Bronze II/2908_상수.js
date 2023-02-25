/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2908
 */

const [a, b] = `${require('fs').readFileSync('/dev/stdin')}`
  .trim()
  .split(/\s/)
  .map((str) => Number(str.split('').reverse().join('')));

console.log(a > b ? a : b);
