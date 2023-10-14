/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2156
 *
 *  Title: 포도주 시식
 *  Algorithm: 다이나믹 프로그래밍
 */

const wines = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/).map(Number);
const n = wines[0];

/*
1. dp[1] = wines[1]
2. dp[2] = wines[1] + wines[2]
3. dp[3] = max(dp[2], dp[1]+wines[3], wines[2]+wines[3])
4. dp[4] = max(dp[3], dp[2]+wines[4], dp[1]+wines[3]+wines[4])
*/

const dp = [, wines[1], wines[1] + wines[2]];

if (n >= 3) {
  dp[3] = Math.max(dp[2], dp[1] + wines[3], wines[2] + wines[3]);

  for (let i = 4; i <= n; i += 1) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i]);
  }
}

console.log(dp[n]);
