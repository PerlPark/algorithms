/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/7562
 *
 *  Title: 나이트의 이동
 *  Algorithm: 그래프 이론, 그래프 탐색, 너비 우선 탐색
 */

const [n, ...tests] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

let answer = '';

for (let i = 0; i < n; i += 1) {
  const length = tests[i * 5];

  const board = Array.from({ length }, () => new Array(length).fill(0));

  const knightX = tests[i * 5 + 1];
  const knightY = tests[i * 5 + 2];
  const goalX = tests[i * 5 + 3];
  const goalY = tests[i * 5 + 4];

  const queue = [];
  queue.push([knightX, knightY]);

  while (queue.length) {
    const [curX, curY] = queue.shift();

    if (curX === goalX && curY === goalY) {
      answer += board[curX][curY] + '\n';
      break;
    }

    for (let j = 0; j < 8; j += 1) {
      const newX = curX + dx[j];
      const newY = curY + dy[j];

      if (newX < 0 || newX >= length || newY < 0 || newY >= length) continue;
      if (board[newX][newY] !== 0) continue;

      board[newX][newY] = board[curX][curY] + 1;
      queue.push([newX, newY]);
    }
  }
}

console.log(answer);
