/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/16953
 */

/*
마지막 숫자 1
  ? 1 제거
  : /2
 */

let [a, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(' ').map(Number);
let count = 0;

while (b > a) {
  if (b % 10 === 1) {
    b -= 1;
    b /= 10;
  } else {
    b /= 2;
  }
  count += 1;
}

console.log(a === b ? count + 1 : -1);
