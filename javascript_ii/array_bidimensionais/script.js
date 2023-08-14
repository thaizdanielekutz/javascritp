const arr = [["1° Nível", "2° Nível", "3° nível"]];
console.log(arr);

// Níveis diferentes de array
const arrNivelado = [
  "1° Nível",
  ["2° Nível", 42, true],
  [
    ["3° Nível", "1º item", "Olá, mundo!"],
    ["3º Nível", "2º item", "Oi, mundo!"],
  ],
  [],
];
console.log(arrNivelado);

// Para referenciar array dentro de um array - encadear
console.log(arrNivelado[1]);
console.log(arrNivelado[1][0]);
