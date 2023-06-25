/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1085
 */

const n = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

function abs(a, b) {
  return Math.abs(a - b);
}

function solution(x, y, w, h) {
  let result = [];

  result.push(abs(0, x));
  result.push(abs(0, y));
  result.push(abs(w, x));
  result.push(abs(h, y));

  return result.reduce((p, c) => (p < c ? p : c));
}

console.log(solution(...n));
