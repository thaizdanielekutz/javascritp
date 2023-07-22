const resultado = prompt("Escolha uma alternativa: \na) \nb) \nc) \nd)");
const resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case 1:
    alert("O resultado é 'a'. ");
    break;
  case 2:
    alert("O resultado é 'b'. ");
    break;
  case 3:
    alert("O resultado é 'c'. ");
    break;
  case 4:
    alert("O resultado é 'd'. ");
  default:
    alert("Finalizando...");
}
