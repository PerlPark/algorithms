/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/16928
 *
 *  Title: 뱀과 사다리 게임
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */

const [condition, ...mapInfo] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n');
const [ladders, snakes] = condition.split(' ').map(Number);

const map = [];
const visited = [0, 0];

for (let i = 0; i < ladders + snakes; i += 1) {
  const [x, y] = mapInfo[i].split(' ').map(Number);
  map[x] = y;
}

let head = 0;
const queue = [1];
while (head < queue.length) {
  const space = queue[head++];

  for (let i = 1; i <= 6; i += 1) {
    let nextSpace = space + i;
    if (nextSpace === 100) {
      console.log(visited[space] + 1);
      return;
    }
    if (map[nextSpace] > 0) {
      nextSpace = map[nextSpace];
    }
    if (visited[nextSpace] > 0) continue;

    queue.push(nextSpace);
    visited[nextSpace] = visited[space] + 1;
  }
}
