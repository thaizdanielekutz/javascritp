let nome = "prop";
console.log(nome);

let objeto = {};
console.log(objeto);

//criar um propriedade
objeto.prop = "Olá, mundo!";
console.log(objeto);

console.log(objeto.prop);

//Referenciar de maneira dinâmica
console.log(objeto[nome]);

//Comparação
console.log(objeto.prop === objeto["prop"]);

console.log(objeto.prop === objeto[nome]);

//Com concatenação dinâmica
console.log(objeto.prop === objeto["pro" + "p"]);

//Referenciar texto de maneira dinâmica
let funcao = "log";
console.log(funcao);

console[funcao]("Olá, Mundo!");

// Alguns exemplos
let pessoa = {};
pessoa.nome = "Thaiz";
pessoa.idade = 22;
pessoa.colegas = ["Lucas", "Juliana", "Rafael"];
pessoa.endereço = { rua: "Logo ali", número: 42, bairro: "Centro" };
console.log(pessoa);

let matriz = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  20,
];

console.log(matriz[4][1]);
console.table(matriz);
