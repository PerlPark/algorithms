/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2739
 */

{
  const number = require('fs').readFileSync('/dev/stdin').toString().trim();
  let result = '';
  for (let i = 1; i < 10; i++) {
    result += `${number} * ${i} = ${+number * i}\n`;
  }
  console.log(result);
}