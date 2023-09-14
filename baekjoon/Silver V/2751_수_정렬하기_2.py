"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/2751
"""

import sys

N = sys.stdin.readline()
numbers = sys.stdin.readlines()

a = map(int, numbers)
a = set(a)
a = sorted(a)

print("\n".join(map(str, a)))
