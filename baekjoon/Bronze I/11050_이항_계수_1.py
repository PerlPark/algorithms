"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11050
"""

from math import factorial

n, k = map(int, input().split(" "))

print(int(factorial(n) / (factorial(n - k) * factorial(k))))
