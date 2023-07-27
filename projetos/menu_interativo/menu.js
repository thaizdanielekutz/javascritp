let opcao = "5";

do {
  opcao = prompt(
    "Seja bem-vindo(a)\n" +
      "\nEscolha uma das opções abaixo: " +
      "1.Opção Um" +
      "2.Opçao Dois" +
      "3. Opção Três" +
      "4. Opção Quatro" +
      "5. Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      break;
    case "3":
      alert("Você escolheu a opção 3");
      break;
    case "4":
      alert("Você escolheu a opção 4");
      break;
    case "5":
      alert("Encerrar...");
  }
} while (opcao !== "5");
