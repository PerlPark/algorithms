/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2439
 */

const n = `${require('fs').readFileSync('/dev/stdin')}`.trim();
let answer = '';

for (let i = 0; i < n; i++) {
  answer = '*'.repeat(n - i).padStart(n) + '\n' + answer;
}
console.log(answer);
