/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2338
 */

const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/).map(n => BigInt(n));
console.log(String(a + b));
console.log(String(a - b));
console.log(String(a * b));