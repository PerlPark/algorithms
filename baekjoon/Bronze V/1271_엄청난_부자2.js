/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1271
 */

const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(v => BigInt(v));
console.log(n / m + "");
console.log((n - n / m * m) + "");