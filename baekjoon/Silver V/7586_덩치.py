import sys

N = int(sys.stdin.readline())
people = sys.stdin.readlines()
rank = [1] * N

for i in range(0, N):
    x, y = map(int, people[i].split(" "))

    for comp in people:
        p, q = map(int, comp.split(" "))

        if x < p and y < q:
            rank[i] += 1

print(*rank)
