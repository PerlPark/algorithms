/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/4999
 */

const [a, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
console.log(a.length >= b.length ? "go" : "no");