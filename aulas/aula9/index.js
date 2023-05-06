const turista = prompt("E aí, turista! Qual é seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === Sim) {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem ++ 1
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")

}

alert("Turista: " + turista + "\nQuantidade de Cidades visitadas: " + contagem + 
"\nCidades Visitadas:\n" + cidades)
