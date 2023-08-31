opcao = "";

do {
  opcao = prompt(
    "Seja bem vindo a Calculadora Geométrica: \n\n1.Triângulo \n2.Retângulo \n3.Quadrado \n4.Trapézio \n5.Círculo \n6.Sair"
  );
  switch (opcao) {
    case "1":
      numberOne = prompt("Digíte a base do triângulo: ");
      numberTwo = prompt("Digíte a altura do triângulo: ");

      alert("A área do triângulo é: " + (numberOne * numberTwo) / 2);
      break;

    case "2":
      numberOne = prompt("Digíte a base do retângulo: ");
      numberTwo = prompt("Digíte a altura do retângulo: ");

      alert("A área do retângulo é: " + numberOne * numberTwo);
      break;

    case "3":
      numberOne = prompt("Digíte a base do quadrado: ");

      alert("A área do quadrado é:" + numberOne ** 2);
      break;
    case "4":
      numberOne = prompt("Digíte a base menor do trapézio: ");
      numberTwo = prompt("Digíte a base maior do trapézio: ");
      numberTree = prompt("Digíte a altura do trapézio: ");

      alert(
        "A área do trapézio é: " + ((numberOne + numberTwo) * numberTree) / 2
      );
      break;
    case "5":
      numberOne = prompt("Digíte o raio do Círculo: ");

      alert("A área do cículo é: " + 3.14 * numberOne ** 2);
      break;
    case "6":
      alert("Encerrando...");
  }

  numberOne;
} while (opcao !== "6");
