let metricas = parseFloat(
  prompt("Insira em metros a medida que deseja converter: ")
);
const conversor = prompt(
  "Selecione a opção: \n\n1. Milímetro(mm) \n\n2. Centímetro(cm) \n\n3. Decímetro(dm) \n\n4. Decâmetro(dam) \n\n5. Hectômetro(hm) \n\n6. Quilômetros(km) \n\n"
);
const conversorNumber = parseFloat(conversor);

switch (conversorNumber) {
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
