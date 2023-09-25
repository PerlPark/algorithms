/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11726
 */

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();
const way = [1, 2];

for (let i = 2; i <= n; i += 1) {
  way[i] = (way[i - 1] + way[i - 2]) % 10007;
}

console.log(way[n - 1]);
