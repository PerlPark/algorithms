"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1543
 *
 *  Title: 문서 검색
 *  Algorithm: 문자열, 브루트포스 알고리즘
"""

string = input()
word = input()

count = 0
i = 0

while len(string) > 0:
    string = string[i:]

    if string.startswith(word):
        i = len(word)
        count += 1
    else:
        i = 1

print(count)
