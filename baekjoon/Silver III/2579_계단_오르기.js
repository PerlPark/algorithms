/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2579
 *
 *  Title: 계단 오르기
 *  Algorithm: 다이나믹 프로그래밍
 */

/*
0.
    sum2[0] = stairs[0]
    sum1[0] = stairs[0]
1.
    sum2[1] = stairs[1]
    sum1[1] = sum2[0]+stairs[1]
2.
    sum2[2] = Math.max(sum2[0], sum1[0])+stairs[2]
    sum1[2] = sum2[1]+stairs[2]
3.
    sum2[3] = Math.max(sum2[1], sum1[1])+stairs[3]
    sum1[3] = sum2[2]+stairs[3]
*/

let [n, ...stairs] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

const sum2 = [stairs[0], stairs[1]];
const sum1 = [stairs[0], sum2[0] + stairs[1]];

for (let i = 2; i < n; i += 1) {
  sum2[i] = Math.max(sum1[i - 2], sum2[i - 2]) + stairs[i];
  sum1[i] = sum2[i - 1] + stairs[i];
}

console.log(Math.max(sum2[n - 1], sum1[n - 1]));
