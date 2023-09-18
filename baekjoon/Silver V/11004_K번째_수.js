/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11004
 */

let [n, k, ...numbers] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[k - 1]);
