/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/14940
 *
 *  Title: 쉬운 최단거리
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */

let [nm, ...map] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n');
map = map.map((row) => row.split(' '));
const [n, m] = nm.split(' ').map(Number);

// 상하좌우 빠른 이동을 위한 구조체
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];

// 목적지 큐에 담기
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    if (map[i]?.[j] === '1') {
      map[i][j] = -1;
    }
    if (map[i]?.[j] === '2') {
      map[i][j] = 0;
      queue.push([i, j]);
    }
  }
}

// bfs
let index = 0;
while (queue.length > index) {
  for (let i = 0; i < queue.length; i += 1) {
    const [x, y] = queue[index++];

    for (let k = 0; k < 4; k += 1) {
      const nX = x + dx[k];
      const nY = y + dy[k];
      if (nX < 0 || nX >= n || nY < 0 || nY >= m) continue; // 범위 밖이면 제외
      if (map[nX][nY] === -1) {
        map[nX][nY] = map[x][y] + 1;
        queue.push([nX, nY]);
      }
    }
  }
}

console.log(map.join('\n').replaceAll(',', ' '));
