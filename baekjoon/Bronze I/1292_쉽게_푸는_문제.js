/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1292
 *
 *  Title: 쉽게 푸는 문제
 *  Algorithm: 수학, 구현
 */

let [a, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

const numCounts = new Array(b).fill(0);
const sum = [];
let num = 1;

for (let i = 0; i < b; i += 1) {
  sum[i] = num;
  numCounts[num] += 1;

  if (numCounts[num] === num) {
    num += 1;
  }
}

console.log(sum.slice(a - 1, b).reduce((a, b) => a + b));
