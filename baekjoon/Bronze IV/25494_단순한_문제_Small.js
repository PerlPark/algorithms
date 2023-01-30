/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/25494
 */

const [n, ...numbers] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
let answer = '';

for (let i = 0; i < n; i++) {
  const [min] = numbers[i].split(' ').sort((a, b) => a - b);
  answer = answer + min + '\n';
}
console.log(answer);
