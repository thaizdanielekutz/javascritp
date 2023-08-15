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
