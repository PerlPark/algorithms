/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/17626
 *
 *  Title: Four Squares
 *  Algorithm: 다이나믹 프로그래밍, 브루트포스 알고리즘
 */

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();

let count = 1;
const visited = [true];
const queue = [0];
let head = 0;

while (head < queue.length) {
  const length = queue.length;
  for (let i = head; i < length; i += 1) {
    const sum = queue[i];

    for (let number = 1; sum + number ** 2 <= n; number += 1) {
      const nextSum = sum + number ** 2;
      if (visited[nextSum]) continue;

      if (nextSum === n) {
        console.log(count);
        return;
      }

      queue.push(nextSum);
      visited[nextSum] = true;
    }
    head = i + 1;
  }
  if (count < 3) {
    count += 1;
  } else {
    console.log(4);
    return;
  }
}
