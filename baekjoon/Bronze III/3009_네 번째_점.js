/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/3009
 *
 *  Title: 네 번째 점
 *  Algorithm: 구현, 기하학
 */

const [x1, y1, x2, y2, x3, y3] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);

let result = [x1, y1];

if (x1 === x2) result[0] = x3;
else if (x1 === x3) result[0] = x2;

if (y1 === y2) result[1] = y3;
else if (y1 === y3) result[1] = y2;

console.log(result.join(' '));
