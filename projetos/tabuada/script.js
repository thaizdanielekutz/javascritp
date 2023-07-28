const number = prompt(
  "Olá, eu sou o Robô da Tabuada!\n" +
    "Informe o número que você deseja calcular a tabuada: "
);

const numberpar = parseFloat(number);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado +=
    " -> " + numberpar + " * " + fator + " = " + numberpar * fator + "\n";
}
alert("Resultado da tabuada de " + numberpar + ":\n\n" + resultado);
