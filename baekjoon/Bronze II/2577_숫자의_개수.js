/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2577
 */

const [a, b, c] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (const num of String(a * b * c)) {
  answer[num]++;
}

console.log(answer.join('\n'));
