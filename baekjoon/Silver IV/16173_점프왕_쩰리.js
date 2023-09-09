/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/16173
 */

let [size, ...map] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/);

size = +size;
map = map.map((v) => v.split(' ').map(Number));

const visited = Array.from({ length: size }, () => new Array(size).fill(false));
const stack = [];
let answer = 'Hing';

stack.push([0, 0]);

while (stack.length > 0) {
  const [x, y] = stack.pop();

  // 이미 방문한 곳이면 패스
  if (visited[x][y]) continue;

  visited[x][y] = true;
  const distance = map[x][y];

  if (distance === -1) {
    answer = 'HaruHaru';
    break;
  }

  const newX = x + distance;
  const newY = y + distance;

  if (newX < size) {
    stack.push([newX, y]);
  }
  if (newY < size) {
    stack.push([x, newY]);
  }
}

console.log(answer);
