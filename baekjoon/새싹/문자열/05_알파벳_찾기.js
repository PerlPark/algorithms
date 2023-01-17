/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10809
 */

const string = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = '';

// 시간: 212 ms, 코드 길이 331 B
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// 시간: 136 ms, 코드 길이 270 B
const alphabet = Array.from({ length: 26 }, (_, idx) => String.fromCharCode(idx + 97));

for (const a of alphabet) {
    result += string.indexOf(a) + ' ';
}
console.log(result);