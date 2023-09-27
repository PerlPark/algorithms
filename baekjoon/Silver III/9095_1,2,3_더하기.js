/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9095
 *
 *  Title: 1, 2, 3 더하기
 *  Algorithm: 다이나믹 프로그래밍
 */

const [length, ...numbers] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(/\n/).map(Number);

let sum = 0;
let count = 0;

for (let i = 0; i < length; i++) {
  sum = 0;
  count = 0;
  const currentNumber = numbers[i];

  for (let j = 1; j <= 3; j++) {
    if (j <= currentNumber) {
      sumCount(j, currentNumber);
    }
  }

  console.log(count);
}

function sumCount(curr, n) {
  sum += curr;

  for (let i = 1; i <= 3; i += 1) {
    if (sum + i <= n) {
      sumCount(i, n);
    }
  }

  if (sum === n) {
    count += 1;
  }

  sum -= curr;
}
