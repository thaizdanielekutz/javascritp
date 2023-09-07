function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triângulo: ");
  const altura = prompt("Informe a altura do triângulo: ");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informe a base do retângulo: ");
  const altura = prompt("Informe a altura do retângulo: ");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado: ");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor trapézio: "));
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "));
  const altura = prompt("Informe a altura do trapézio: ");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do círculo: ");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área do triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
    }
  } while (opcao !== "6");
}
