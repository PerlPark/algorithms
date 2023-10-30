/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1003
 *
 *  Title: 피보나치 함수
 *  Algorithm: 다이나믹 프로그래밍
 */

const [t, ...test] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/).map(Number);

const count0 = [1, 0];
const count1 = [0, 1];

for (let i = 0; i < t; i += 1) {
  if (count0[test[i]] && count1[test[i]]) {
    console.log(count0[test[i]], count1[test[i]]);
    continue;
  }

  for (let j = 2; j <= test[i]; j += 1) {
    count0[j] = count0[j - 1] + count0[j - 2];
    count1[j] = count1[j - 1] + count1[j - 2];
  }
  console.log(count0[test[i]], count1[test[i]]);
}
