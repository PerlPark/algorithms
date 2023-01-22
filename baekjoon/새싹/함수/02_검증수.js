/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2475
 */

console.log(require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(n => Number(n) ** 2).reduce((p, c) => p + c, 0) % 10);