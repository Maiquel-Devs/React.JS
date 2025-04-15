notas = []

def calcular_soma():
    soma = 0
    for nota in notas:
        soma += nota
    return soma

def calcular_media():
    if len(notas) == 0:
        return 0
    return calcular_soma() / len(notas)

def encontrar_maior():
    maior = notas[0]
    for nota in notas:
        if nota > maior:
            maior = nota
    return maior

def encontrar_menor():
    menor = notas[0]
    for nota in notas:
        if nota < menor:
            menor = nota
    return menor

def ler_notas():
    print("Digite as notas dos alunos (digite uma nota negativa para encerrar):")
    while True:
        nota = float(input("Digite uma nota: "))
        if nota < 0:
            break
        notas.append(nota)

    if len(notas) == 0:
        print("\nNenhuma nota válida foi digitada.")
    else:
        print("\nResultados:")
        print(f"Soma total das notas: {calcular_soma()}")
        print(f"Média das notas: {calcular_media():.2f}")
        print(f"Maior nota: {encontrar_maior()}")
        print(f"Menor nota: {encontrar_menor()}")

ler_notas()
