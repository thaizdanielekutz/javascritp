function calcular(a, b, operacao) {
  console.log("Realizando uma operação.");
  const resultado = operacao(a, b); // somar(3,5)
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}
calcular(3, 5, somar);

// somar() -> apresenta retorno
// somar -> função anônima

calcular(8, 4, function subtrair(x, y) {
  console.log("Realizando uma subtração.");
  return x - y;
});
