const name = prompt("Insira o nome do personagem: ");
const poweratach = prompt("Insira o poder de ataque do personagem: ");
const namePersonage = prompt("Insira o nome do seu personagem: ");
const quantLife = prompt("Insira a quantidade de pontos de vida: ");
const powerDefense = pront("Insira o poder de defesa de outro personagem: ");
const defense = prompt("Possui escudo: (Sim/Não)");

if((poweratach > powerDefense) && defense === "Não"){
    alert("O dano é de: " + (poweratach - powerDefense))
} if else((powerDefense > powerDefense) && defense === "Sim"){
    alert("O dano é de : " + (1/2(poweratach - powerDefense)))
} else(poweratach <= powerDefense ){
    alert("")
}
