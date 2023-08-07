const medida = prompt("Insira uma medida em metros:");

const unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1. Milimetros (mm)" +
    "\n2. Centímetros (cm)" +
    "\n3. Decímetros (dm)" +
    "\n4. Decâmetros (dam)" +
    "\n5. Hectômetros (hm)" +
    "\n6. Quilômetros (km)"
);

switch (unidade) {
  case "1":
    alert("Resultado:" + medida + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado:" + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado:" + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado:" + medida + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado:" + medida + "m = " + medida / 100 + "hm");
    break;
  case "6":
    break;
    alert("Resultado:" + medida + "m = " + medida / 1000 + "km");
  default:
    alert("Opção inválida.");
}
