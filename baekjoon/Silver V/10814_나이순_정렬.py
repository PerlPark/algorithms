"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10814
"""

import sys

N = int(sys.stdin.readline())
result = []

for i in range(N):
    age, name = sys.stdin.readline().split(" ")
    age = int(age)
    result.append([age, name])

result.sort(key=lambda x: x[0])

for i in result:
    sys.stdout.write(str(i[0]) + " " + i[1])
