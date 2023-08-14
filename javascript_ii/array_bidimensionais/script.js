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

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
// Transforma os dados se possível em tabela
console.table(matriz);
