def classificar_idade(idade):
    if 0 <= idade <= 12:
        return "Criança"
    elif 13 <= idade <= 17:
        return "Adolescente"
    elif 18 <= idade <= 59:
        return "Adulto"
    elif idade >= 60:
        return "Idoso"
    else:
        return "Idade inválida"

def coletar_e_classificar_idades():
    idades = []
    continuar = "s"

    while continuar.lower() == "s":
        idade = int(input("Digite a idade da pessoa: "))
        idades.append(idade)
        continuar = input("Deseja digitar outra idade? (s/n): ")

    print("\nClassificação das idades:")
    for idade in idades:
        classificacao = classificar_idade(idade)
        print(f"{idade} anos: {classificacao}")

coletar_e_classificar_idades()
