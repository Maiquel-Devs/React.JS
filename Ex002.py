def encontrar_maior(lista):
    maior = lista[0]  
    for numero in lista:
        if numero > maior:
            maior = numero
    return maior

def main():
    numeros = []
    print("Digite 5 números:")
    for i in range(5):
        num = int(input(f"Digite o {i+1}º número: "))
        numeros.append(num)

    maior_numero = encontrar_maior(numeros)
    print(f"O maior número da lista é: {maior_numero}")

main()
