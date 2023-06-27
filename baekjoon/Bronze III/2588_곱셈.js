/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2588
 */

const [a, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

console.log(+a * b[2]);
console.log(+a * b[1]);
console.log(+a * b[0]);
console.log(+a * b);
