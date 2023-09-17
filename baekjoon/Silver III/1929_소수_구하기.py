"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2164
"""

import math

m, n = list(map(int, input().split()))


def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True


for n in range(m, n + 1):
    if is_prime(n):
        print(n)
