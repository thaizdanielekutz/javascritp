const firstName = prompt("Digíte o primeiro nome do recruta:");
const completeName = prompt("Digíte o sobrenome do recruta:");
const studyCamp = prompt("Digíte a área de estudo do recreuta:");
const bornDay = prompt("Digíte o ano de nascimento do recruta:");

alert(
  "Dados do recruta:" +
    "\nNome Completo: " +
    firstName +
    " " +
    completeName +
    "\nÁrea de estudo: " +
    studyCamp +
    "\nIdade: " +
    Number(2023 - bornDay)
);
