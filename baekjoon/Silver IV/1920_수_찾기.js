/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1920
 */

const [_, _a, __, b] = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n');
let answer = '';

const a = new Set(_a.split(' '));

b.split(' ').forEach((n) => {
    if (a.has(n)) {
        answer += '1\n';
    } else {
        answer += '0\n';
    }
});

console.log(answer);
