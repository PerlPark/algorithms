/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1427
 */

const n = `${require('fs').readFileSync('/dev/stdin')}`.trim();
console.log(n.split('').sort((a, b) => b.localeCompare(a)).join(''));