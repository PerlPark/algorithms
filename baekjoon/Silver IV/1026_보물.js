/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1026
 *
 *  Title: 보물
 *  Algorithm: 수학, 그리디 알고리즘, 정렬
 */

let [n, a, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

a = a.split(' ').map(Number);
b = b.split(' ').map(Number);

a.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < +n; i += 1) {
  let maxIndex = 0;
  let max = 0;

  for (let j = 0; j < +n; j += 1) {
    if (max < b[j]) {
      max = b[j];
      maxIndex = j;
    }
  }

  sum += a[i] * b[maxIndex];
  b[maxIndex] = 0;
}

console.log(sum);
