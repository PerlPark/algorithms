/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1074
 *
 *  Title: Z
 *  Algorithm: 분할 정복, 재귀
 *  Reference: https://mygumi.tistory.com/284
 */

let [n, r, c] = `${require('fs').readFileSync('./test.txt')}`.trim().split(' ').map(Number);
let answer = 0;

function split(n) {
  const line = 2 ** n;
  const total = line ** 2;
  const numberInLine = line / 2; // 한 분면의 한 줄의 개수
  let area = 0;

  if (r >= numberInLine) {
    area += 3;
    r -= numberInLine;
  } else {
    area += 1;
  }
  if (c >= numberInLine) {
    area += 1;
    c -= numberInLine;
  }

  answer += (total / 4) * (area - 1);
}

while (n > 0) {
  split(n--);
}

console.log(answer);
