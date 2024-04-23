# Usando o python Implementar o Blum Blum Shub escolhendo números p e q maiores que 10000 e que atendam às premissas do algoritmo. Os primos devem esta na tabela dos 10000 primeiros primosimport random
import random
tamanho = 10000

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

def get_primes(limit):
    primes = []
    num = 2
    while len(primes) < limit:
        if is_prime(num) and num > tamanho:
            primes.append(num)
        num += 1
    return primes

def blum_blum_shub(n):
    p, q = random.sample(get_primes(10000), 2)
    print("p =", p)
    print("q =", q)
    M = p * q
    seed = random.randint(1, M)
    result = []
    for _ in range(n):
        seed = (seed ** 2) % M
        result.append(seed % 2)
    return result

n = 10  # número de bits que queremos gerar
print("Números gerados pelo Blum Blum Shub:", blum_blum_shub(n))
