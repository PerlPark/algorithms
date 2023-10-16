/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2178
 *
 *  Title: 미로 탐색
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */

let [size, ...blocks] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

const [height, width] = size.split(' ').map(Number);
blocks = blocks.map((v) => v.split(''));

const visitedCounts = Array.from({ length: height }, () => new Array(width).fill(0));
visitedCounts[0][0] = 1;

const queue = [[0, 0]];

let row = 0;
let col = 0;

while (queue.length > 0) {
  const curr = queue.shift();
  row = curr[0];
  col = curr[1];

  // 칸에 들어있는 값이 1이 아닌 경우 통과
  if (blocks[row][col] !== '1') continue;

  // 현재 칸에 몇 번째에 방문했는지 횟수 가져옴, 인접한 칸에 대해 +1으로 저장
  const count = visitedCounts[row][col];

  const top = row - 1;
  const bottom = row + 1;
  const left = col - 1;
  const right = col + 1;

  if (bottom === height - 1 && col === width - 1) {
    console.log(count + 1);
    break;
  }
  if (row === height - 1 && right === width - 1) {
    console.log(count + 1);
    break;
  }

  if (top >= 0) {
    if (visitedCounts[top][col] === 0) {
      visitedCounts[top][col] = count + 1;
      queue.push([top, col]);
    }
  }
  if (bottom < height) {
    if (visitedCounts[bottom][col] === 0) {
      visitedCounts[bottom][col] = count + 1;
      queue.push([bottom, col]);
    }
  }

  if (left >= 0) {
    if (visitedCounts[row][left] === 0) {
      visitedCounts[row][left] = count + 1;
      queue.push([row, left]);
    }
  }

  if (right < width) {
    if (visitedCounts[row][right] === 0) {
      visitedCounts[row][right] = count + 1;
      queue.push([row, right]);
    }
  }
}
