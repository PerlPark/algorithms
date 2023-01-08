/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10951
 */

{
  const line = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
  let result = '';
  for (let i = 0; i < line.length; i++) {
    const [a, b] = line[i].split(" ");
      result = result + (Number(a) + Number(b)) + '\n';
  }
  console.log(result);
}