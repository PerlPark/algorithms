/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1157
 */

const string = `${require('fs').readFileSync('/dev/stdin')}`.trim().toUpperCase();
const set = new Set(string);

const answer = Array.from(set).reduce((p, c) => {
    const found = string.match(new RegExp(c, 'g')).length;
    return found === p[1] ? ["?", found] : found > p[1] ? [c, found] : p;
}, [, 0]);

console.log(answer[0]);