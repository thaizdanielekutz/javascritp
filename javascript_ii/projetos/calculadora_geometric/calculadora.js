opcao = "";

do {
  opcao = prompt(
    "Seja bem vindo a Calculadora Geométrica: \n\n1.Triângulo \n2.Retângulo \n3.Quadrado \n4.Trapézio \n5.Círculo \n6.Sair"
  );
  switch (opcao) {
    case "1":
      numberOne = prompt("Digíte a base do triângulo: ");
      numberTwo = prompt("Digíte a altura do triângulo: ");

      alert("O resultado é " + (numberOne * numberTwo) / 2);
  }
} while (opcao !== "6");
