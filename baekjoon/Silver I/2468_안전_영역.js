/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2468
 *
 *  Title: 안전 영역
 *  Algorithm: 그래프 이론, 브루트포스 알고리즘, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 */

const [n, ...rowIsland] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split(/\n/);

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const createGraph = (size, initialValue) => Array.from({ length: size }, () => new Array(size).fill(initialValue));

class Island {
  constructor(size, island) {
    this.size = size;
    this.maxHeight = 0;
    this.minHeight = 1000;
    this.safetyInfo = createGraph(size, true);

    for (let i = 0; i < size; i += 1) {
      island[i] = island[i].split(' ').map(Number);

      this.maxHeight = Math.max(this.maxHeight, ...island[i]);
      this.minHeight = Math.min(this.minHeight, ...island[i]);
    }
    this.island = island;
  }

  getMinHeight() {
    return this.minHeight;
  }

  getMaxHeight() {
    return this.maxHeight;
  }

  floodedTo(height) {
    for (let x = 0; x < this.size; x += 1) {
      for (let y = 0; y < this.size; y += 1) {
        if (this.island[x][y] <= height) {
          this.safetyInfo[x][y] = false;
        }
      }
    }
    return this;
  }

  getCountOfSafetyLands() {
    let count = 0;
    const visited = createGraph(this.size, false);

    for (let x = 0; x < this.size; x += 1) {
      for (let y = 0; y < this.size; y += 1) {
        if (!this.safetyInfo[x][y]) continue;
        if (visited[x][y]) continue;

        const queue = [];
        queue.push([x, y]);
        count += 1;

        while (queue.length) {
          const [x, y] = queue.shift();

          if (visited[x][y]) continue;

          visited[x][y] = true;

          for (let k = 0; k < 4; k += 1) {
            const nX = x + dx[k];
            const nY = y + dy[k];

            if (nX < 0 || nX >= this.size || nY < 0 || nY >= this.size) continue;
            if (!this.safetyInfo[nX][nY]) continue;

            queue.push([nX, nY]);
          }
        }
      }
    }
    return count;
  }
}

const island = new Island(+n, rowIsland);
let maxCountOfSafetyLands = 1;

for (let h = island.getMinHeight(); h < island.getMaxHeight(); h += 1) {
  maxCountOfSafetyLands = Math.max(maxCountOfSafetyLands, island.floodedTo(h).getCountOfSafetyLands());
}

console.log(maxCountOfSafetyLands);
