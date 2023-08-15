const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-Vindo(a) ao Cadastro de Imovéis!\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\n Escolha uma opção:\n1. Novo Imóvel \n2. Listar Imóveis \n3. Sair"
  );
} while (opcao !== "3");

let imovel = {};

imovel.proprietário = prompt("Informe o nome do proprietário do imóvel: ");
imovel.quartos = prompt("Quantos quartos possui o imóvel: ");
imovel.baneiros = prompt("Quantos banheiros possui o imóvel: ");
imovel.garagem = prompt("O imóvel possi garagem: (SIM/NÃO)");
