/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11720
 */

// 시간: 128 ms
{
    const [_, numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
    let result = 0;

    for (const number of numbers) {
      result += Number(number);
    }
    console.log(result);
}

// 시간: 124 ms
{
    const [n, numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
    let result = 0;

    for (let i = 0; i < n; i++) {
      result += Number(numbers[i]);
    }
    console.log(result);
}