let metricas = parseFloat(
  prompt("Insira a medida que deseja converter em metros: ")
);
const conversor = prompt(
  "Selecione a opção: \na) Milímetro(mm) \nb) Centímetro(cm) \nc) Decímetro(dm) \nd) Decâmetro(dam) \ne) Hectômetro(hm) \nf) Quilômetros(km)"
);
const conversorNumber = parseFloat(conversor);

switch (conversor) {
  case 1:
    alert("O resultado é: " + metricas * 1000 + " mm");
    break;
  case 2:
    alert("O resultado é : " + metricas * 100 + " cm");
    break;
  case 3:
    alert("O resultado é: " + metricas * 10 + " dm");
    break;
  case 4:
    alert("O resultado é: " + metricas / 10 + " dam");
    break;
  case 5:
    alert("O resultado é: " + metricas / 100 + " hm");
    break;
  case 6:
    alert("O resultado é: " + metricas / 1000 + " km");

  default:
    alert("Opção inválida");
}
