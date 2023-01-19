/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9086
 */

const strings = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const isUpperCase = /[A-Z]/;
let result = '';

for (const string of strings) {
    if (isUpperCase.test(string)) {
        result += string[0] + string[string.length-1] + '\n';
    }
}
console.log(result);