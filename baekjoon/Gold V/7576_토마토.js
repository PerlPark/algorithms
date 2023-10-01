/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/7576
 *
 *  Title: 토마토
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */

let [mn, ...tomatos] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n');
tomatos = tomatos.map((row) => row.split(' ').map(Number));
const [m, n] = mn.split(' ').map(Number);

// 상하좌우 빠른 이동을 위한 구조체
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const queue = [];
let day = 1;

// 익은 토마토 큐에 담기
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    if (tomatos[i][j] === 1) {
      queue.push([i, j]);
    }
  }
}

// bfs, 익은 토마토를 시작으로 상하좌우의 토마토 큐에 담기
let index = 0;
while (queue.length > index) {
  for (let i = 0; i < queue.length; i += 1) {
    const [x, y] = queue[index++];

    for (let k = 0; k < 4; k += 1) {
      const nX = x + dx[k];
      const nY = y + dy[k];
      if (nX < 0 || nX >= n || nY < 0 || nY >= m) continue; // 범위 밖이면 제외
      if (tomatos[nX][nY] === 0) {
        day = tomatos[x][y] + 1;
        tomatos[nX][nY] = day;
        queue.push([nX, nY]);
      }
    }
  }
}

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    if (tomatos[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(day - 1);
