const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo:" +
    primeiroNome +
    "" +
    sobrenome +
    "\nCampo de Estudo:" +
    campoDeEstudo +
    "\nIdade:" +
    (2023 - anoDeNascimento)
);
