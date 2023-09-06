/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11047
 */

let [n, k, ...coins] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

coins.sort((a, b) => b - a);
let count = 0;

for (let i = 0; i < n; i += 1) {
  while (coins[i] <= k) {
    k -= coins[i];
    count += 1;
  }
}

console.log(count);
