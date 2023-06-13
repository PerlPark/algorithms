/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2884
 */

const [H, M] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

let h = H;
let m = M - 45;
if (m < 0) {
  h -= 1;
  m += 60;
}

if (h < 0) {
  h += 24;
}

console.log(`${h} ${m}`);
