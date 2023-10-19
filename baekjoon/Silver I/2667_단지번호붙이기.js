/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2667
 *
 *  Title: 단지번호붙이기
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */

let [n, ...map] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);
n = +n;

// 단지 정보 배열 생성
const blockInfo = Array.from({ length: n }, () => new Array(n).fill(0));
const countInfo = [];
let count = 0;

const queue = [];
queue.push([0, 0]);

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (blockInfo[i][j] > 0) continue;

    if (map[i][j] === '1') {
      queue.push([i, j]);
    }

    while (queue.length > 0) {
      const [y, x] = queue.shift();

      if (blockInfo[y][x] > 0) continue;
      if (map[y][x] !== '1') continue;

      const blockNumber =
        blockInfo[y - 1]?.[x] || blockInfo[y + 1]?.[x] || blockInfo[y][x - 1] || blockInfo[y][x + 1] || ++count;
      blockInfo[y][x] = blockNumber;

      // 개수 정보 저장
      countInfo[blockNumber - 1] = (countInfo[blockNumber - 1] || 0) + 1;

      if (y - 1 >= 0) queue.push([y - 1, x]);
      if (y + 1 < n) queue.push([y + 1, x]);
      if (x - 1 >= 0) queue.push([y, x - 1]);
      if (x + 1 < n) queue.push([y, x + 1]);
    }
  }
}

console.log(countInfo.length);
console.log(countInfo.sort((a, b) => a - b).join('\n'));
