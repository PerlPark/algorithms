/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11659
 */

/*
dp[1] = 5
dp[2] = dp[1] + n[1] = 1~2
dp[3] = dp[2] + n[2] = 1~3 => 3,3 = dp[3] - dp[2] / 2,3 => dp[3] - dp[1]
dp[4] = dp[3] + n[3] = 1~4 => 4,4 = dp[4] - dp[3] / 3,4 => dp[4] - dp[2] / 2,4 => dp[4] - dp[1] / 1~n => dp[4] / 2~n => 1 / 3~n => 2 / 4~n => 3 / dp[j] - dp[i-1]
*/

let [nm, numbers, ...ij] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

const [n, m] = nm.split(' ');
numbers = numbers.split(' ').map(Number);

let answer = '';
const dp = [0, numbers[0]];

for (let i = 2; i <= +n; i += 1) {
  dp[i] = dp[i - 1] + numbers[i - 1];
}

for (let k = 0; k < +m; k += 1) {
  const [i, j] = ij[k].split(' ').map(Number);
  answer += dp[j] - dp[i - 1] + '\n';
}

console.log(answer);
