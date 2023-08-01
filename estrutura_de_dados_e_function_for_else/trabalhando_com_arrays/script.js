const arr = [
  "Marina",
  "Idisléia",
  "Margarete",
  "Cristian",
  "Sirlene",
  "Amélia",
  "Natalia",
  "Cristina",
];

//Adicionar Elementos
//push

arr.push("Lilian");

console.log(arr);

//Adicionar elementos no início
//unshift
arr.pop();
const ultimoElemento = arr.pop();
console.log(ultimoElemento);

//Remover Elementos
//pop
arr.pop();

//Remover Elementos do início
//shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um Elemento
// includes
const inclui = arr.includes("Marina");

// Encontrar o índice
// indexof
const indice = arr.indexOf("Margarete");

//Cortar e Concatenar
//slice
const hobbies = arr.slice(0, 4);
console.log(hobbies);
//Os elementos finais
const hobbies2 = arr.slice(-3);
console.log(hobbies2);

//Concatenar
//concat
const sociedade = hobbies.concat(hobbies2, "Marina", "Sara");
console.log(sociedade);
