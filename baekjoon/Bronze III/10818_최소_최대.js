/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10818
 */

const [_, ...numbers] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map((v) => +v);
console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`);
