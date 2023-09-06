import sys
import collections

_, cards, _, numbers = sys.stdin.readlines()

cards = map(int, cards.split(" "))
numbers = map(int, numbers.split(" "))

cards_count = collections.Counter(cards)

for n in numbers:
    print(cards_count[n], " ", sep="", end="")