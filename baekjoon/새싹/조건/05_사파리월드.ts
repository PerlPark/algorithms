/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2420
 */

{
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
  console.log(Math.abs((+input[0] - +input[1])));
}