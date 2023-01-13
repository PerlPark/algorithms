/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2738
 */

const [condition, ...numbers] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const [n, m] = condition.split(' ').map((x: string) => Number(x));
let result = '';

// 메모리: 12780 KB, 시간: 292 ms
// for (let i = 0; i < y; i++) {
//     for (let j = 0; j < x; j++) {
//         result += Number(numbers[i].split(' ')[j]) + Number(numbers[i + y].split(' ')[j]) + ' ';
//     }
//     result += '\n';
// }

// 메모리: 12840 KB, 시간: 272 ms
for (let i = 0; i < n * m; i++) {
    const column = Math.trunc(i / m);
    const row = i % m;

    result += (Number(numbers[column].split(' ')[row]) + Number(numbers[column + n].split(' ')[row])) + ' ';

    if (row === m - 1) {
        result += '\n';
    }
}

console.log(result);