let opcao = "5";

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
      "\nEscolha uma das opções abaixo:" +
      "\n1. Opção Um" +
      "\n2. Opção Dois" +
      "\n3. Opção Três" +
      "\n4. Opção Quatro" +
      "\n5. Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolhei a opção 1");
      break;
    case "2":
      alert("Você escolhei a opção 2");
      break;
    case "3":
      alert("Você escolhei a opção 3");
      break;
    case "4":
      alert("Você escolhei a opção 5");
      break;
    case "5":
      alert("Você escolhei a Encerrar");
      alert("Encerando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "5");
