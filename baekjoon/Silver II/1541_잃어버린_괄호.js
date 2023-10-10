/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1541
 *
 *  Title: 일어버린 괄호
 *  Algorithm: 수학, 그리디 알고리즘, 문자열, 파싱
 */

const expression = `${require('fs').readFileSync('/dev/stdin')}`.trim();

let sum = 0;
let numberStack = '';
let subtractMode = false;
const numbers = '0123456789';

for (let i = 0; i <= expression.length; i += 1) {
  // 숫자 만들기
  if (numbers.includes(expression[i])) {
    numberStack += expression[i];
    continue;
  }

  // 뺄셈 모드 활성화 이후에는 모든 수 빼기
  if (subtractMode) {
    sum -= Number(numberStack);
  } else {
    sum += Number(numberStack);

    // -기호가 나오면 뺼셈 모드 활성화
    if (expression[i] === '-') subtractMode = true;
  }
  numberStack = '';
}

console.log(sum);
