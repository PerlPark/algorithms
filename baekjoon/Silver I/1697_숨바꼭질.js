/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1697
 *
 *  Title: 숨바꼭질
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */

let [n, k] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(' ').map(Number);

const visited = [];
let queue = [];

if (n >= k) {
  console.log(n - k);
  return;
}

visited[n] = 0;
queue.push(n);

while (queue.length > 0) {
  if (visited[k]) break;

  const curr = queue.shift();
  const time = visited[curr] + 1;

  const backward = curr - 1;
  const forward = curr + 1;
  const teleport = curr * 2;

  if (visited[backward] === 0 && curr > 0) {
    queue.push(backward);
    visited[backward] = time;
  }
  if (visited[forward] === 0 && curr < k) {
    queue.push(forward);
    visited[forward] = time;
  }
  if (visited[teleport] === 0 && curr < k) {
    queue.push(teleport);
    visited[teleport] = time;
  }
}

console.log(visited[k]);
