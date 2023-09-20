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

// como utiliza uma high no dia-a-dia
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maça", "Uva", "Banana"];
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

// para a mesma coisa
lista.forEach(exibirElemento);
