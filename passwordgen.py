import random
import string

N=int(input("How many digits should this code have? "))

res = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(N))

print(res)