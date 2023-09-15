function somar(a, b) {
  return a + b;
}

let operacao = somar;

console.log(operacao(4, 5));

operacao = function (a, b) {
  return a - b;
};
console.log(operacao(63, 13));

// UM EXEMPLO A FUNÇÃO ANONIMA SÓ ACEITA A CHAMADA DEPOIS REPARE oiMundo() QUE SÓ FUNCIONA EM CASO COMENTADO

olaMundo();
oiMundo();

function olaMundo() {
  console.log("Olá, mundo!");
}

const oiMundo = function () {
  console.log("Oi, mundo!");
};
//oiMundo();
