/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/5597
 */

const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");
console.log((Number(a) + Number(b)) * (Number(a) - Number(b)));

