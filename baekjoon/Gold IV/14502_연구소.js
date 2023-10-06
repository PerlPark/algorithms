/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/14502
 *
 *  Title: 연구소
 *  Algorithm: 구현, 그래프 이론, 브루트포스 알고리즘, 그래프 탐색, 너비 우선 탐색
 */

let [nm, ...map] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
const [n, m] = nm.split(' ').map(Number);
map = map.map((m) => m.split(' ').map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let maxSafety = 0;

for (let a = 0; a < n * m; a += 1) {
  const aX = Math.floor(a / m);
  const aY = a % m;
  if (map[aX][aY] !== 0) continue;
  map[aX][aY] = 1;

  for (let b = 0; b < n * m; b += 1) {
    const bX = Math.floor(b / m);
    const bY = b % m;
    if (map[bX][bY] !== 0) continue;
    map[bX][bY] = 1;

    for (let c = 0; c < n * m; c += 1) {
      const cX = Math.floor(c / m);
      const cY = c % m;
      if (map[cX][cY] !== 0) continue;
      map[cX][cY] = 1;
      maxSafety = Math.max(maxSafety, bfs(map));
      map[cX][cY] = 0;
    }
    map[bX][bY] = 0;
  }
  map[aX][aY] = 0;
}

function bfs(_map) {
  const map = _map.map((m) => [...m]);

  const queue = [];
  const safetyZones = [];
  let virus = 0;
  let head = 0;

  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < m; y += 1) {
      if (map[x][y] === 0) {
        safetyZones.push([x, y]);
      }
      if (map[x][y] === 2) {
        queue.push([x, y]);

        while (head < queue.length) {
          const [x, y] = queue[head++];

          for (let i = 0; i < 4; i += 1) {
            const nX = dx[i] + x;
            const nY = dy[i] + y;

            if (nX >= n || nX < 0 || nY >= m || nY < 0) continue; // 범위가 아니면 패스
            if (map[nX][nY] === 0) {
              map[nX][nY] = 2;
              queue.push([nX, nY]);
            }
          }
        }
      }
    }
  }

  // 안전영역으로 저장된 곳 중 감염된 곳 개수 세기
  safetyZones.forEach(([x, y]) => {
    if (map[x][y] === 2) {
      virus += 1;
    }
  });
  return safetyZones.length - virus;
}

console.log(maxSafety);
