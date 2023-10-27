"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/9375
 *
 *  Title: 패션왕 신해빈 
 *  Algorithm: 수학, 자료 구조, 조합론, 해시를 사용한 집합과 맵
"""

import sys


t = int(sys.stdin.readline())

kind = {}


def multiply(arr):
    return eval("*".join([str(n) for n in arr]))


while t > 0:
    n = int(sys.stdin.readline())
    for i in range(n):
        _, k = sys.stdin.readline().strip().split(" ")
        if k not in kind:
            kind[k] = 1
        kind[k] += 1

    if n > 0:
        print(multiply(kind.values()) - 1)
        kind.clear()
    else:
        print(0)
    t -= 1
