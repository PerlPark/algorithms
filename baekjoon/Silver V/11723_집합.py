"""
 *  BAEKJOON ONLINE JUDGE
 *  https://www.acmicpc.net/problem/11723
"""

import sys

m = int(sys.stdin.readline())
s = set()

for i in range(m):
    command, value = (sys.stdin.readline().strip().split(" ") + ["0"])[:2]
    value = int(value)

    if command == "add":
        s.add(value)

    if command == "remove":
        s.discard(value)

    if command == "check":
        sys.stdout.write(("1" if value in s else "0") + "\n")

    if command == "toggle":
        if value not in s:
            s.add(value)
        else:
            s.remove(value)

    if command == "all":
        s = set(range(1, 21))

    if command == "empty":
        s.clear()
