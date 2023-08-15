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
