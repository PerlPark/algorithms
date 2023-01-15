/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2744
 */


// 코드 길이: 320 B, 시간: 124 ms
{
    const words = require('fs').readFileSync('/dev/stdin').toString().trim();
    const isUpperCase = /[a-z]/;
    let result = '';

    for (const string of words) {
        if (isUpperCase.test(string)) {
            result += string.toLowerCase();
        } else {
            result += string.toUpperCase();
        }
    };
    console.log(result);
}

// 코드 길이: 174 B, 시간: 136 ms
{
    const words = require('fs').readFileSync('/dev/stdin').toString().trim();
    console.log(Array.from(words, (w) => /[a-z]/.test(w) ? w.toUpperCase() : w.toLowerCase()).join(""));
}