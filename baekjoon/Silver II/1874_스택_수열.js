/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1874
 *
 *  Title: 스택 수열
 *  Algorithm: 자료 구조, 스택
 */

const [n, ...order] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\n/).map(Number);

const numbers = Array.from({ length: n }, (_, i) => i + 1);
const stack = [];
let answer = '';

for (let i = 0; i < n; i += 1) {
  const currNum = order[i];

  while (numbers.includes(currNum)) {
    const first = numbers.shift();
    stack.push(first);
    answer += '+\n';
  }

  const last = stack.pop();
  answer += '-\n';

  if (last !== currNum) {
    answer = 'NO';
    break;
  }
}

console.log(answer);
