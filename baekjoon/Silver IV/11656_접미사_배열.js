/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11656
 *
 *  Title: 접미사 배열
 *  Algorithm: 문자열, 정렬
 */

const word = `${require('fs').readFileSync('/dev/stdin')}`.trim();

const splitter = (word) => {
  return Array.from(word, (_, i) => word.slice(i));
};

const result = splitter(word);

result.sort();

console.log(result.join('\n'));
