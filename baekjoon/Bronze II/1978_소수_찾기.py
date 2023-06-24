"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/1978
"""

import math

N = int(input())
numbers = list(map(int, input().strip().split()))
count = 0


def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False
    return True


for n in numbers:
    if is_prime(n):
        count = count + 1

print(count)
