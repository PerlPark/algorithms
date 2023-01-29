/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1546
 */

const [_, ...n] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);

let max = 0;
let sum = 0;
const transform = (sum, max) => (sum / max) * 100;

for (let i = 0; i < n.length; i++) {
  max = max < +n[i] ? n[i] : max;
  sum = sum + +n[i];
}

const avg = transform(sum, max) / n.length;
console.log(Number.isInteger(avg) ? avg.toFixed(1) : avg);