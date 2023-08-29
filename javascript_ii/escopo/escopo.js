let pokemon = "Charmander";

function evoluir() {
  pokemon = "Charmander";
}

//console.log(pokemon);
//evoluir();
//console.log(pokemon);

function criarAnimal() {
  let animal = "Galo";
}

//criarAnimal();
//console.log(animal);

// Declaração utilizando o var

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "Aprovado!";
  } else {
    var aprovado = false;
    let situacao = "Reprovado!";
  }
  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}

avaliarNota(83);
avaliarNota(49);

// Em funções isso não se aplica

function ola() {
  var texto = "Olá, mundo!";
}

console.log(texto);
