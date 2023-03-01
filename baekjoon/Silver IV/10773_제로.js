/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10773
 */

const [_, ...n] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/).map(Number);

let stack = [];
n.forEach((v) => (v > 0 ? stack.push(v) : stack.pop()));

console.log(stack.reduce((p, c) => p + c, 0));
