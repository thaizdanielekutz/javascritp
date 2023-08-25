// return volta um valor, ou seja devolve o valor

function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return;
}

const resultado = calcularMedia(7, 2);

//console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome, //nome: nome
    preco, //preço: preco
    estoque: 1,
  };
  return produto;
}
//Poderia ser assim ou usar a forma abaixo:

//const notebook = criarProduto("Notebook Intel Core i3 8GB");

//console.log(criarProduto("Notebook Intel Core i3 8GB", 2500));

//Calculo da área do retângulo
function areaRetangular(base, altura) {
  return base * altura;
}
//Também poderia calcular com base na área retangular

function areaQuadrado1(lado) {
  return areaRetangular(lado, lado);
}

console.log(areaRetangular(3, 5));

console.log(areaQuadrado1(5));

//Calculo da área do quadrado
function areaQuadrado(lado) {
  return lado ** 2;
}

console.log(areaQuadrado(10));
