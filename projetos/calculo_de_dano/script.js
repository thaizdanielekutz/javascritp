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
  danoCausado = (1 / 2) * (poderDeAtacante - poderDeDefesa);
}
if (poweratach <= powerDefense) {
  alert("O dano é igual a 0.");
}
