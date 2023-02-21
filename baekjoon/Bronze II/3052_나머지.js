/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/3052
 */

const numbers = `${require('fs').readFileSync('/dev/stdin')}`
  .trim()
  .split(/\s/)
  .map((v) => Number(v) % 42);

const set = new Set(numbers);

console.log(set.size);
