/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/5341
 */

const n = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map((v) => +v);
console.log(n.reduce((p, c) => (c > 0 ? p + (c + (c - 1) * (c / 2)) + '\n' : p), ''));
