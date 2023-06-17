"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9063
"""

import sys

T = int(sys.stdin.readline())

min_x = 10000
max_x = -10000
min_y = 10000
max_y = -10000

if T > 1:
    for i in range(T):
        x, y = list(map(int, sys.stdin.readline().strip().split()))

        if x > max_x:
            max_x = x
        if x < min_x:
            min_x = x

        if y > max_y:
            max_y = y
        if y < min_y:
            min_y = y

    print((max_x - min_x) * (max_y - min_y))

else:
    print(0)
