/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1094
 */

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

const sticks = [64];
let sum = 64;
let count = 1;

while (sum !== n) {
  const last = sticks.length - 1;
  const half = sticks[last] / 2;

  if (half >= n) {
    sticks[last] = half;
  } else {
    sticks[last] = half;
    sticks.push(half);
  }

  count = 0;
  sum = sticks.reduce((p, c) => {
    if (p + c <= n) {
      count = count + 1;
      return p + c;
    }
    return p;
  }, 0);
}

console.log(count);
