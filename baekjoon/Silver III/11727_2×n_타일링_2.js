/**
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11727
 *
 *  Title: 2×n 타일링 2
 *  Algorithm: 다이나믹 프로그래밍
 */

const n = +`${require('fs').readFileSync('/dev/stdin')}`.trim();
const way = [1, 3];

for (let i = 2; i <= n; i += 1) {
  way[i] = (way[i - 1] + way[i - 2] * 2) % 10007;
}

console.log(way[n - 1]);

/*
1: 1
2: 3
3: 5 (1 * 2 + 3)
4: 11 (3 * 2 + 5) 
5: 21 (5 * 2 + 11)

||
=
ㅁ

|||
|=
|ㅁ
=|
ㅁ|

||||
||=
||ㅁ
=||
ㅁ||
|=|
|ㅁ|
==
ㅁㅁ
=ㅁ
ㅁ=

|||||
|||=
=|||
||=|
|=||
=|=
|==
==|
|||ㅁ
ㅁ|||
||ㅁ|
|ㅁ||
ㅁ|ㅁ
|ㅁㅁ
ㅁㅁ|
=ㅁ|
ㅁ=|
|=ㅁ
|ㅁ=
=|ㅁ
ㅁ|=
*/
