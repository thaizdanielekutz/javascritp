const baralho = []
baralho = ""

do{
    opcao = prompt("Cartas no baralho " + baralho.length + "\n1. Adicionar uma carta \n2.Puxar uma carta \n3. Sair")

    switch(opcao){
        case "1":
        case "2":
        case "3":
            alert("Saindo...")
            break
            default: 
            alert("opção inválida")
    }
}while(opcao !== "3")