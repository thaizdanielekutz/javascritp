const auto1 = prompt("Digíte o nome do primeiro carro:");
const velocidade1 = prompt("Digíte a velocidade do primeiro carro:");
const auto2 = prompt("Digíte o nome do segundo carro: ");
const velocidade2 = prompt("Digíte a velocidade do segundo carro:");

if (velocidade1 > velocidade2) {
  alert("O " + auto1 + " é mais rápido que o " + auto2);
}
if (velocidade1 === velocidade2) {
  alert("O " + auto1 + " possui uma velocidade igual ao " + auto2);
} else {
  alert("O " + auto1 + " é mais lento que o " + auto2);
}
