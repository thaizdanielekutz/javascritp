const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-Vindo(a) ao Cadastro de Imovéis!\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\n Escolha uma opção:\n1. Novo Imóvel \n2. Listar Imóveis \n3. Sair"
  );
  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt(
        "Informe o nome do proprietário do imóvel: "
      );
      imovel.quartos = prompt("Quantos quartos possui o imóvel: ");
      imovel.banheiros = prompt("Quantos banheiros possui o imóvel: ");
      imovel.garagem = prompt("O imóvel possi garagem: (SIM/NÃO)");

      const confirmacao = confirm(
        "Salvar este imóvel? \n" +
          "\nProprietário" +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem: " +
          imovel.garagem
      );
      break;
    case "2":
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
