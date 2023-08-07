const atacante = prompt("Qual é o nome do personagem atacante: ");
const poderDeAtacante = parseFloat(prompt("Qual é o seu poder de ataque? "));
const defensor = prompt("Qual é o nome do personagem defensor? ");
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui? "));
const poderDeDefesa = parseFloat(pront("Qual é o seu poder de defesa? "));
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)");
let danoCausado = 0;

if (poderDeAtacante > poderDeDefesa && possuiEscudo === "Não") {
  danoCausado = poderDeAtacante - poderDeDefesa;
} else if (poderDeAtacante > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtacante - poderDeDefesa) / 2;
} else {
  danoCausado = 0;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtacante +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
