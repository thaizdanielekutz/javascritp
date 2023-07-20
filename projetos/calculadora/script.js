const entrada1 = prompt("Digíte um número:");
const entrada2 = prompt("Digíte outro número:");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const sum = x + y;
const subtraction = x - y;
const division = x / y;
const multiplication = x * y;

alert(
  "Resultados:" +
    "\nSoma: " +
    sum +
    "\nSubtração: " +
    subtraction +
    "\nDivisão: " +
    division +
    "\nMultiplicação: " +
    multiplication
);
