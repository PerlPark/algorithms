/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/3036
 *
 *  Title: 링
 *  Algorithm: 수학, 정수론, 유클리드 호제법
 */

let [_, firstRing, ...rings] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/).map(Number);

function divide(a, b) {
  return a / b;
}

let answer = '';

for (let i = 0; i < rings.length; i += 1) {
  let target = firstRing;
  let divided = divide(target, rings[i]);

  while (!Number.isInteger(divided)) {
    target += firstRing;

    divided = divide(target, rings[i]);
  }

  answer += divided + `/${target / firstRing}\n`;
}

console.log(answer);
