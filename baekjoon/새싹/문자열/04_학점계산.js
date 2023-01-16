/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2754
 */

const grade = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = 0;

switch (grade[0]) {
    case 'A':
        result = 4;
        break;
    case 'B':
        result = 3;
        break;
    case 'C':
        result = 2;
        break;
    case 'D':
        result = 1;
        break;
    default:
        break;
}

if (grade[1] === '+') {
    result += 0.3;
}

if (grade[1] === '-') {
    result -= 0.3;
}

console.log(result.toFixed(1));