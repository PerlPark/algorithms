/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10026
 *
 *  Title: 적록색약
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */

let [n, ...map] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
n = Number(n);
map = map.map((line) => line.split(''));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const colorWeaknessMap = Array.from({ length: n }, () => new Array(n).fill(0));
const notColorWeaknessMap = Array.from({ length: n }, () => new Array(n).fill(0));

let colorWeaknessCount = 0;
let notColorWeaknessCount = 0;

const isSame = (a, b) => a === b;
const isSameOrRG = (a, b) => isSame(a, b) || (a === 'R' && b === 'G') || (a === 'G' && b === 'R');

for (let x = 0; x < n; x += 1) {
  for (let y = 0; y < n; y += 1) {
    // 적녹색약인 사람 방문처리 안된 경우
    if (!colorWeaknessMap[x][y]) {
      checkArea([x, y], colorWeaknessMap, ++colorWeaknessCount, isSameOrRG);
    }
    // 적녹색약이 아닌 사람 방문처리 안된 경우
    if (!notColorWeaknessMap[x][y]) {
      checkArea([x, y], notColorWeaknessMap, ++notColorWeaknessCount, isSame);
    }
  }
}

function checkArea([x, y], areaMap, areaNumber, conditionFn) {
  const queue = [];
  let head = 0;

  areaMap[x][y] = areaNumber;
  queue.push([x, y]);

  while (head < queue.length) {
    const [cx, cy] = queue[head++];

    for (let i = 0; i < 4; i += 1) {
      const nx = dx[i] + cx;
      const ny = dy[i] + cy;

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (areaMap[nx][ny]) continue;

      if (conditionFn(map[cx][cy], map[nx][ny])) {
        areaMap[nx][ny] = areaNumber;
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(notColorWeaknessCount, colorWeaknessCount);
