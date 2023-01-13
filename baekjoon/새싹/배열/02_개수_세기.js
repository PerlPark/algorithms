/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10807
 */

const [n, _numbers, x] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const numbers = _numbers.split(' ');
let count = 0;
for (let i = 0; i < n; i++) {
    if(numbers[i] === x) {
        count++;
    }
}
console.log(count);