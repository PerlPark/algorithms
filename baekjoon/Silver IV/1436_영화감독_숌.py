"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1436
"""

N = int(input())
count = 0
n = 666

while True:
    if str(n).find("666") > -1:
        count += 1

    if count == N:
        break

    n += 1

print(n)
