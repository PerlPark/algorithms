/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2501
 */

const [n, k] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);

if (k === 1) {
  console.log(1);
  return;
}

const divisor = [1];

for (let i = 2; i <= n; i++) {
  if (n % i === 0) {
    divisor.push(i);
  }
}

console.log(divisor[k - 1] || 0);
