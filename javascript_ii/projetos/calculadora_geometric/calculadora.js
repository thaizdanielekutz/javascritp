opcao = "";

do {
  opcao = prompt(
    "Seja bem vindo a Calculadora Geométrica: \n\n1.Triângulo \n2.Retângulo \n3.Quadrado \n4.Trapézio \n5.Círculo \n6.Sair"
  );
  switch (opcao) {
    case "1":
      numberOne = prompt("Digíte a base do triângulo: ");
      numberTwo = prompt("Digíte a altura do triângulo: ");

      function areaTriangular(numberOne, numberTwo) {
        return numberOne * numberTwo;
      }

      alert("O resultado é " + result);
  }
} while (opcao !== "6");
