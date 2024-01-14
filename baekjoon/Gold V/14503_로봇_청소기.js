/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/14503
 *
 *  Title: 로봇 청소기
 *  Algorithm: 구현, 시뮬레이션
 */

let [_, robotInfo, ...map] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n');

const [r, c, d] = robotInfo.split(' ').map(Number);
map = map.map((line) => line.split(' ').map(Number));

let count = 0;

class Robot {
  constructor(r, c, d) {
    this.r = r;
    this.c = c;
    this.d = d; // 0, 1, 2, 3
    this.isRunning = true;
  }

  getX() {
    return this.r;
  }

  getY() {
    return this.c;
  }

  getIsRunning() {
    return this.isRunning;
  }

  getAround() {
    return [
      [this.r - 1, this.c],
      [this.r + 1, this.c],
      [this.r, this.c - 1],
      [this.r, this.c + 1]
    ];
  }

  getFront() {
    // 0인 경우 북쪽, 1인 경우 동쪽, 2인 경우 남쪽, 3인 경우 서쪽
    switch (this.d) {
      case 0:
        return [this.r - 1, this.c];
      case 1:
        return [this.r, this.c + 1];
      case 2:
        return [this.r + 1, this.c];
      case 3:
        return [this.r, this.c - 1];
    }
  }

  getBack() {
    // 0인 경우 북쪽, 1인 경우 동쪽, 2인 경우 남쪽, 3인 경우 서쪽
    switch (this.d) {
      case 0:
        return [this.r + 1, this.c];
      case 1:
        return [this.r, this.c - 1];
      case 2:
        return [this.r - 1, this.c];
      case 3:
        return [this.r, this.c + 1];
    }
  }

  rotation() {
    this.d = this.d === 0 ? 3 : this.d - 1;
  }

  move([r, c]) {
    this.r = r;
    this.c = c;
  }

  stop() {
    this.isRunning = false;
  }
}

const robot = new Robot(r, c, d);

while (robot.getIsRunning()) {
  const current = map[robot.getX()][robot.getY()];
  if (current === 0) {
    map[robot.getX()][robot.getY()] = 2;
    count += 1;
  }

  const around = robot.getAround();

  const t = map[around[0][0]][around[0][1]];
  const b = map[around[1][0]][around[1][1]];
  const l = map[around[2][0]][around[2][1]];
  const r = map[around[3][0]][around[3][1]];

  // 청소되지 않은 빈칸이 있는 경우
  if ([t, b, l, r].includes(0)) {
    // 빈칸이 있는 곳이 정면에 있도록 회전
    robot.rotation();
    let front = robot.getFront();
    while (map[front[0]][front[1]]) {
      robot.rotation();
      front = robot.getFront();
    }
    robot.move(front);
    isMoved = true;
    continue;
  }

  // 청소되지 않은 칸이 없는 경우
  const back = robot.getBack();
  // 뒤에 벽이 있는 경우
  if (map[back[0]][back[1]] === 1) {
    robot.stop();
  }
  robot.move(back);
}

console.log(count);
