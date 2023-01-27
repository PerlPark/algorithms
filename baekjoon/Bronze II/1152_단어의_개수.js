/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1152
 */

const words = `${require('fs').readFileSync('/dev/stdin')}`.trim();
console.log(words.length > 0 ? words.split(/\s/).length : 0);