/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9625
 *
 *  Title: BABBA
 *  Algorithm: 다이나믹 프로그래밍
 */

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

const a = [1];
const b = [0];

for (let i = 1; i <= n; i += 1) {
  a[i] = b[i - 1];
  b[i] = b[i - 1] + a[i - 1];
}

console.log(a[n], b[n]);

/**
 * 1 => 0 1
 * 2 => 1 1
 * 3 => 1 2
 * 4 => 2 3
 * 5 => 3 5
 * 6 => 5 8
 * 7 => 8 13
 * 8 => 13 21
 * 9 => 21 34
 * 10 => 34 55
 */
