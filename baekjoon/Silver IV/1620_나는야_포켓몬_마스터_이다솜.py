"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1620
"""

import sys

n, m = sys.stdin.readline().split(" ")  # 포켓몬의 개수 n, 문제의 개수 m

book = []
bookDict = {}

for i in range(int(n)):
    name = sys.stdin.readline().strip()
    book.append(name)
    bookDict[name] = i + 1

print(bookDict)

for _ in range(int(m)):
    quest = sys.stdin.readline().strip()

    if quest.isalpha():
        print(bookDict[quest])
    else:
        print(book[int(quest) - 1])
