/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11399
 */

let [_, ...times] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);
let sum = 0;

times.sort((a, b) => a - b);

for (let i = 0; i < times.length; i += 1) {
  sum += times[i] * (times.length - i);
}
console.log(sum);
