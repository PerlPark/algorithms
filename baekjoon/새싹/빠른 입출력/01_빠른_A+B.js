/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/15552
 */

{
  const [n, ...line] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
  let result = [];
  for (let i = 0; i < n; i++) {
    const [a, b] = line[i].split(" ");
      result.push(Number(a) + Number(b));
  }
  console.log(result.join('\n'));
}