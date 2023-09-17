/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1904
 */

// N=1 1  => 1
// N=2 00, 11 => 2
// N=3 100, 001, 111 => 3
// N=4 1001, 1100, 0011, 1111, 0000 => 5
// N=5 11001, 10011, 11100, 00111, 111111, 10000, 00001, 00100 => 8
// https://www.acmicpc.net/board/view/84734

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();
const table = [1, 2];

for (let i = 2; i <= n; i += 1) {
  table[i] = (table[i - 1] + table[i - 2]) % 15746;
}

console.log(table[n - 1]);
