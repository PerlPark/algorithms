/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/18870
 *
 *  Title: 좌표 압축
 *  Algorithm: 정렬, 값/좌표 압축
 */

let [n, ...x] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

const count = {};
const sorted = [...new Set(x)];
sorted.sort((a, b) => a - b);

for (let i = 0; i < sorted.length; i += 1) {
  count[sorted[i]] = i;
}

let answer = '';
for (let i = 0; i < n; i += 1) {
  answer += count[x[i]] + ' ';
}

console.log(answer);
