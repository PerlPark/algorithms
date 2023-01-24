/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2562
 *  
 *  Math.max 메서드는 숫자로 형변환을 합니다.
 */

const numbers = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(/\s/);
const max = Math.max(...numbers);
console.log(max);
console.log(numbers.indexOf(String(max)) + 1);