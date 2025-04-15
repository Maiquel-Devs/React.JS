def armazenar_numeros():
    numeros = []
    print("Digite 5 números:")
    for i in range(5):
        numero = int(input(f"Digite o {i+1}º número: "))
        numeros.append(numero)
    return numeros

def procurar_numero(lista):
    numero_procurado = int(input("Digite o número que deseja procurar: "))
    if numero_procurado in lista:
        print(f"O número {numero_procurado} está na lista.")
    else:
        print(f"O número {numero_procurado} NÃO está na lista.")

numeros_digitados = armazenar_numeros()
procurar_numero(numeros_digitados)
