/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2438
 */

{
  const number = require('fs').readFileSync('/dev/stdin').toString().trim();
  let result = '';
  for (let i = 1; i <= +number; i++) {
    result += `${"*".repeat(i)}\n`;
  }
  console.log(result);
}