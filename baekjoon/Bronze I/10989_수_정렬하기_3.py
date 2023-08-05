"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/10989
"""

import sys

n = int(sys.stdin.readline())
counts = [0] * 10000

while n > 0:
    i = int(sys.stdin.readline())
    counts[i - 1] += 1
    n -= 1

for number, count in enumerate(counts):
    for i in range(0, count):
        print(number + 1)
