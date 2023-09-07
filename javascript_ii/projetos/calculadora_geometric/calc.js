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
