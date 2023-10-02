/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/3053
 *
 *  Title: 택시 기하학
 *  Algorithm: 수학, 기하학
 */

const r = +`${require('fs').readFileSync('/dev/stdin')}`.trim();
console.log((r * r * Math.PI).toFixed(6)); // 유클리드 기하학에서 원의 넓이
console.log(((2 * r * 2 * r) / 2).toFixed(6)); // 택시 기하학에서 원의 넓이
