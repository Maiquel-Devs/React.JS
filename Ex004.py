numeros = []

def somar_numeros():
    total = 0
    for numero in numeros:
        total += numero
    return total

def ler_numeros():
    print("Digite números (digite 0 para parar):")
    while True:
        num = int(input("Digite um número: "))
        if num == 0:
            break
        numeros.append(num)

    soma = somar_numeros()
    print(f"\nA soma total dos números digitados é: {soma}")

ler_numeros()
