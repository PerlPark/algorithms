/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10871
 */

// 176ms
{
  const [_, x, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
  const result = numbers.filter(num => +num < +x);
  console.log(result.join(" "));
}

// 128ms
{
  const [n, x, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
  const result = [];
  for (let i = 0; i < n; i++) {
    if(+numbers[i] < +x) {
      result.push(numbers[i]);
    }
  }
  console.log(result.join(" "));
}